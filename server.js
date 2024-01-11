const ManageClient = require('./ManageClient.js');
const saveCSV = require('./auxs/saveCSV.js');

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
        // const listAllMessages = await chat.fetchMessages({limit: Infinity});
        const listAllMessages = await chat.fetchMessages({limit: 10});
        console.log(listAllMessages[(listAllMessages.length)-1]);
        // saveCSV(listAllMessages, 'messages_group.csv');
        // for(let i = 0; i < listAllMessages.length; i++){
        //     console.log(listAllMessages[(listAllMessages.length)-1]);
        //     // console.log(listAllMessages[i].body);
        // }
        console.log(listAllMessages[(listAllMessages.length)-1]);
    } else if (message.body === '!load_n_messages') {
        const listNMessages = await chat.fetchMessages({limit: process.env.LIMIT_MESSAGES});
    } else {
        console.log('Message not found');
    }
});