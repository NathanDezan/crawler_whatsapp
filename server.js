const ManageClient  = require('./ManageClient.js');
require('dotenv').config()


const manageClient = new ManageClient(process.env.NO_GUI_SYSTEM, process.env.NO_ROOT_PRIVILEGES);
client_instance = ManageClient.defineClient();

ManageClient.authClient(client_instance);
ManageClient.statusClient(client_instance, 'ready');
ManageClient.statusClient(client_instance, 'initialize');

client_instance.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});