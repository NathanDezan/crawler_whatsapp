const fs = require('fs');

function saveCSV(content, fileName) {
  try {
    fs.writeFileSync(fileName, content, 'utf-8');
    console.log(`CSV file "${fileName}" has been saved successfully.`);
  } catch (error) {
    console.error(`Error saving CSV file: ${error.message}`);
  }
}

// Example usage:
const csvData = "Name, Age, City\nJohn, 25, New York\nJane, 30, San Francisco";
const fileName = "example.csv";

saveCSV(csvData, fileName);
