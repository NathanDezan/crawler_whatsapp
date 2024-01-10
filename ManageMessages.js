class ManageMessages{
    constructor(client_instance){
        this.client_instance = client_instance;
    }
    
    loadAllMessages(){
        this.client_instance.on('message', async message => {
            if(message.body === '!load_all_messages') {
                const chat = await message.getChat();
                const listAllMessages = await chat.fetchMessages({limit: 100});

                for(let i = 0; i < listAllMessages.length; i++){
                    console.log(listAllMessages[i].author);
                    console.log(listAllMessages[i].body);
                }

                // console.log(allMessages);
            }
        });
    }
}

module.exports = ManageMessages;