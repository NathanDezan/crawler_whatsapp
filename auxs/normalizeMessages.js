/**
 * Processes the given text by removing line breaks, commas, and accents.
 * 
 * @param {string} text - The text to be processed.
 * @returns {string} The processed text without line breaks, commas, and accents.
 */
function processText(text) {
    try {
        const textWithoutBreaksAndCommas = text.replace(/[\n,]/g, '');
        const textWithoutAccents = textWithoutBreaksAndCommas.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

        return textWithoutAccents;
    } catch (error) {
        console.error(`Error processing text: ${error.message}`);
    }
}

module.exports = processText;