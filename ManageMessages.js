class ManageMessages{
    constructor(client_instance){
        this.client_instance = client_instance;
    }
    
    loadAllMessages(){
        this.client_instance.on('message', async message => {
            if(message.body === '!load_all_messages') {
                const allMessages = await this.client_instance.fetchMessages({limit: 100});
                console.log(allMessages);
            }
        });
    }
}

module.exports = ManageMessages;