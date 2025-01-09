/**
 * Validate the date format and range.
 *
 * @param {string} startDate - The start date in YYYY-MM-DD format.
 * @param {string} endDate - The end date in YYYY-MM-DD format.
 */
function validateDateRange(startDate, endDate) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    // Check if dates match the YYYY-MM-DD format
    if (!dateRegex.test(startDate)) {
        throw new Error(`Invalid start date format. Expected format is YYYY-MM-DD.`);
    }
    if (!dateRegex.test(endDate)) {
        throw new Error(`Invalid end date format. Expected format is YYYY-MM-DD.`);
    }

    // Check if start date is earlier than or equal to end date
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
        throw new Error(`Start date "${startDate}" cannot be later than end date "${endDate}".`);
    }
}

module.exports = validateDateRange;
