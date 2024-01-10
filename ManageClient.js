const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

/**
 * Represents a set client.
 */
class ManageClient {
    constructor(noGuiSystem, noRootPrivileges) {
        this.noGuiSystem = noGuiSystem;
        this.noRootPrivileges = noRootPrivileges;
    }

    /**
     * Defines and returns a new client instance.
     * @returns {Client} The newly created client instance.
     */
    createClient() {
        let argsTemp = [];

        if (this.noGuiSystem) {
            argsTemp.push('--no-sandbox');
        }

        if (this.noRootPrivileges) {
            argsTemp.push('--disable-setuid-sandbox');
        }

        const client = new Client({
            authStrategy: new LocalAuth(),
            puppeteer: { args: argsTemps }
        });

        return client;
    }

    /**
     * Authenticates the client by handling the QR code.
     * @param {object} client - The client object.
     */
    authClient(client) {
        try {
            client.on('qr', qr => {
                qrcode.generate(qr, { small: true });
            });
        } catch (error) {         
            console.log(error);
        }
    }

    /**
     * Sets up a listener for the 'ready' event on the client object and logs a message when the client is ready.
     * @param {object} client - The client object to set up the listener for.
     */
    statusClient(client, status) {
        try {
            if (status === 'initialize') {
                client.initialize();
            }

            if (status === 'ready') {
                client.on('ready', () => {
                    console.log('Client is ready!');
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = ManageClient;