const ManageClient  = require('./ManageClient.js');
const ManageMessages = require('./ManageMessages.js');

require('dotenv').config()

const manageClient = new ManageClient(process.env.NO_GUI_SYSTEM, process.env.NO_ROOT_PRIVILEGES);
client_instance = manageClient.createClient();

manageClient.authClient(client_instance);
manageClient.statusClient(client_instance, 'ready');
manageClient.statusClient(client_instance, 'initialize');

client_instance.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}

    if(message.body === '!break') {
        return;
    }

    if(message.body === '!load_all_messages') {
        const manageMessages = new ManageMessages(client_instance);
        manageMessages.loadAllMessages();
    }
});