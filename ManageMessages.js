class ManageMessages{
    constructor(client_instance){
        this.client_instance = client_instance;
    }
    
    loadAllMessages(){
        this.client_instance.on('message', async message => {
            const chat = await message.getChat();
            const listAllMessages = await chat.fetchMessages({limit: 10});

            // for(let i = 0; i < listAllMessages.length; i++){
            //     console.log(listAllMessages[(listAllMessages.length)-1]);
            //     // console.log(listAllMessages[i].body);
            // }
            console.log(listAllMessages[(listAllMessages.length)-1]);

            // console.log(allMessages);
        });
    }
}

module.exports = ManageMessages;