#!/usr/bin/env node

const countTestCases = require("../src/index.js");
const program = require("commander");

// Set up CLI arguments using `commander`
program
  .name("test-case-counter")
  .description(
    "Count the Java test cases written by a specific Git user in a Git repository over a date range."
  )
  .version("1.0.2")
  .requiredOption("-a, --author <name>", "Author name (Git)")
  .requiredOption("-s, --start <date>", "Start date (DD-MM-YYYY)")
  .requiredOption("-e, --end <date>", "End date (DD-MM-YYYY)")
  .option("-x, --extensions <ext>", "File extensions to filter (comma-separated)", ".java")
  .option("-t, --target <subfolder>", "Target subfolder to filter files", "")
  .parse(process.argv);

const options = program.opts();

try {
  const extensions = options.extensions.split(",").map((ext) => ext.trim());
  const testCount = countTestCases(
    options.author,
    options.start,
    options.end,
    extensions,
    options.target
  );

  console.log("+===============================================+");
  console.log("|               Test Case Counter               |");
  console.log("+===============================================+");
  console.log(`| Author:            ${options.author}`);
  console.log(`| Date range:        ${options.start} - ${options.end}`);
  if (options.target) {
    console.log(`| Target subfolder:  ${options.target}`);
  }
  console.log("+-----------------------------------------------+");
  console.log(`| Total testcases written:  ${testCount}`);
  console.log("+===============================================+");

} catch (err) {
  console.error("Error:", err.message);
  process.exit(1);
}
