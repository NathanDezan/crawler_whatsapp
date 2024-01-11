const ManageClient = require('./ManageClient.js');
const saveCSV = require('./auxs/saveCSV.js');
const createData = require('./auxs/createData.js');

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
        const listAllMessages = await chat.fetchMessages({limit: Infinity});
        const tempData = createData(listAllMessages);
        const fileName = 'all_messages.csv';

        saveCSV(tempData, fileName);
    } else if (command === '!load_n_messages') {
        const listNMessages = await chat.fetchMessages({ limit: n });
        const tempData = createData(listNMessages);
        const fileName = 'n_messages.csv';

        saveCSV(tempData, fileName);
    } else {
        console.log(message);
    }
});