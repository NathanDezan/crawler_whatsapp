/**
 * Converts a timestamp to a formatted datetime string.
 * @param {number} timestamp - The timestamp to convert.
 * @param {string} locale - The locale to use for formatting.
 * @returns {string} The formatted datetime string.
 */
function convertTimestampToDatetime(timestamp, locale) {
    const dateTime = new Date(timestamp * 1000);

    const format = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    };

    return dateTime.toLocaleString(locale, format);
}

module.exports = convertTimestampToDatetime;