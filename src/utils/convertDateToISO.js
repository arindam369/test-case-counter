/**
 * Convert a date from DD-MM-YYYY to YYYY-MM-DD format.
 *
 * @param {string} date - The date in DD-MM-YYYY format.
 * @returns {string} The date in YYYY-MM-DD format.
 */
function convertDateToISO(date) {
    const dateRegex = /^\d{2}-\d{2}-\d{4}$/;

    // Validate the input date format
    if (!dateRegex.test(date)) {
        throw new Error(`Invalid date format: ${date}. Expected format is DD-MM-YYYY.`);
    }

    const [day, month, year] = date.split("-");
    return `${year}-${month}-${day}`;
}

module.exports = convertDateToISO;
