const processText = require('./normalizeMessages.js');
const convertTimestamp = require('./convertTimestamp.js');
require('dotenv').config()

/**
 * Creates a formatted data string from a list of messages.
 * 
 * @param {Array} listAllMessages - The list of messages to process.
 * @returns {string} - The formatted data string.
 */
function createData(listAllMessages){
    try{
        const fields = 'Datetime, Number, Message\n'
        let tempData = "";

        for (let i = 0; i < listAllMessages.length; i++) {
            const tempDatetime = convertTimestamp(listAllMessages[i]._data.t, process.env.LOCALE_FORMAT_DATETIME);
            const tempNumber = listAllMessages[i]._data.author.user;
            const tempMessage = processText(listAllMessages[i]._data.body);
    
            tempData += `${tempDatetime}, ${tempNumber}, ${tempMessage}\n`;
        }

        return (fields + tempData);
    }catch(error){
        console.error(`Error creating data: ${error.message}`);
    }
}

module.exports = createData;