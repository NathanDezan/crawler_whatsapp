const ManageClient  = require('./ManageClient.js');
require('dotenv').config()


const manageClient = new ManageClient(process.env.NO_GUI_SYSTEM, process.env.NO_ROOT_PRIVILEGES);
client_instance = manageClient.defineClient();

manageClient.authClient(client_instance);
manageClient.statusClient(client_instance, 'ready');
manageClient.statusClient(client_instance, 'initialize');

client_instance.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});