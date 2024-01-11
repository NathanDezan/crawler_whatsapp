const fs = require('fs');

/**
 * Saves the content as a CSV file with the specified file name.
 * @param {string} content - The content to be saved as a CSV file.
 * @param {string} fileName - The name of the CSV file.
 */
function saveCSV(content, fileName) {
  try {
    fs.writeFileSync(fileName, content, 'utf-8');
    console.log(`CSV file "${fileName}" has been saved successfully.`);
  } catch (error) {
    console.error(`Error saving CSV file: ${error.message}`);
  }
}

module.exports = saveCSV;

// // Example usage:
// const csvData = "Name, Age, City\nJohn, 25, New York\nJane, 30, San Francisco";
// const fileName = "example.csv";

// saveCSV(csvData, fileName);