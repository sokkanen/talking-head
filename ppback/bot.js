const tmi = require('tmi.js')

const options = {
    identity: {
        username: username,
        password: password
    },
    channels: [
        channelName
    ]
}

const client = new tmi.client(options)

client.on('message', messageHandler)
client.on('connected', connectionHandler)
client.connect()

const messageHandler = (target, context, message, self) => {
    if (self){
        return
    }
    const command = msg.trim()
}

// VAHVASTI KESKEN...