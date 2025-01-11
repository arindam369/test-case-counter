/**
 * Validate the date format and range.
 *
 * @param {string} startDate - The start date in DD-MM-YYYY format.
 * @param {string} endDate - The end date in DD-MM-YYYY format.
 */
function validateDateRange(startDate, endDate) {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

    // Check if dates don't match the DD-MM-YYYY format
    if (!dateRegex.test(startDate)) {
        throw new Error(`Invalid start date format. Expected format is DD-MM-YYYY.`);
    }
    if (!dateRegex.test(endDate)) {
        throw new Error(`Invalid end date format. Expected format is DD-MM-YYYY.`);
    }

    // Check if start date is earlier than or equal to end date
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
        throw new Error(`Start date "${startDate}" cannot be later than end date "${endDate}".`);
    }
}

module.exports = validateDateRange;
