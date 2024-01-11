const ManageClient = require('./ManageClient.js');
const saveCSV = require('./auxs/saveCSV.js');
const processText = require('./auxs/normalizeMessages.js');
const convertTimestamp = require('./auxs/convertTimestamp.js');

// const ManageMessages = require('./ManageMessages.js');

require('dotenv').config()

const manageClient = new ManageClient(process.env.NO_GUI_SYSTEM, process.env.NO_ROOT_PRIVILEGES);
client_instance = manageClient.createClient();

manageClient.authClient(client_instance);
manageClient.statusClient(client_instance, 'ready');
manageClient.statusClient(client_instance, 'initialize');

client_instance.on('message', async message => {
    // const manageMessages = new ManageMessages(client_instance);
    const chat = await message.getChat();

    const listParams = message.body.split(' ');
    const command = listParams[0];
    const n = listParams[1];

    if (command === '!load_all_messages') {
        const fields = 'Datetime, NotifyName, Message, Number\n'
        let tempData = "";

        // const listAllMessages = await chat.fetchMessages({limit: Infinity});

        const listAllMessages = await chat.fetchMessages({ limit: 10 });

        for (let i = 0; i < listAllMessages.length; i++) {
            const tempDatetime = convertTimestamp(listAllMessages[i]._data.t);
            const tempNotifyName = listAllMessages[i]._data.notifyName;
            const tempMessage = processText(listAllMessages[i]._data.body);
            const tempNumber = listAllMessages[i]._data.author.user;

            tempData += `${tempDatetime}, ${tempNotifyName}, ${tempMessage}, ${tempNumber}\n`;
        }

        saveCSV((fields + tempData), 'all_messages.csv');
    } else if (message.body === '!load_n_messages') {
        const listNMessages = await chat.fetchMessages({ limit: process.env.LIMIT_MESSAGES });
    } else {
        console.log('Message not found');
    }
});