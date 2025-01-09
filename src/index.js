const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const validateDateRange = require("./utils/validateDateRange");

/**
 * Count the testcases written by a specific author in a Git repository over a date range.
 * 
 * @param {string} authorName - The name of the author (Git).
 * @param {string} startDate - The start date in YYYY-MM-DD format.
 * @param {string} endDate - The end date in YYYY-MM-DD format.
 * @param {string[]} extensions - File extensions to filter (e.g., [".java"]).
 * @param {string} targetSubfolder - Subfolder to filter files.
 * @returns {number} The number of test cases.
 */
function countTestCases(authorName, startDate, endDate, extensions, targetSubfolder) {
    
    // Validate the date range
    validateDateRange(startDate, endDate);

    // Get the root directory of the Git repository
    let repoRoot;

    try {
        repoRoot = execSync("git rev-parse --show-toplevel").toString().trim();
    } catch (err) {
        throw new Error("Failed to get repository root: " + err.message);
    }

    // Get the files changed by the author in the specified date range
    let gitLogOutput;

    try {
        gitLogOutput = execSync(
            `git log --author="${authorName}" --since="${startDate}" --until="${endDate}" --name-only`,
            { cwd: repoRoot }
        ).toString();
    } catch (err) {
        throw new Error("Failed to retrieve git log: " + err.message);
    }

    // Check if the author is not present in the log
    if (!gitLogOutput.trim()) {
        throw new Error(`No commits found for author "${authorName}" in the specified date range.`);
    }

    const changedFiles = [
        ...new Set(
            gitLogOutput
                .split("\n")
                .filter(
                    (file) =>
                        file.includes(targetSubfolder) &&
                        extensions.some((ext) => file.endsWith(ext))
                )
        ),
    ];

    // Count test cases in those files
    let testCount = 0;

    for (const file of changedFiles) {
        const filePath = path.join(repoRoot, file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, "utf-8");
            testCount += (content.match(/@Test/g) || []).length;
        }
    }

    return testCount;
}

module.exports = countTestCases;
