require('dotenv').config()
const tmi = require('tmi.js')

const CHANNELNAME = process.env.CHANNELNAME
const BOT_USERNAME = process.env.BOT_USERNAME
const BOT_TOKEN = process.env.BOT_TOKEN

const options = {
    identity: {
        username: BOT_USERNAME,
        password: BOT_TOKEN
    },
    channels: [
        CHANNELNAME
    ]
}

const client = new tmi.client(options)

const messageHandler = (target, context, msg, self) => {
    console.log(target)
    console.log(context)
    console.log(msg)
    console.log(self)
    if (self){
        return
    } else if (msg.length < 5){
        return
    }

    const command = msg.substring(0, 4)
    const toTheHead = msg.substring(5, msg.length -1)

    if (command === '!paa'){
        console.log(toTheHead)

    } 
}

const connectionHandler = (addr, port) => {
    console.log('Connected to ', addr, port)
}

client.on('message', messageHandler)
client.on('connected', connectionHandler)
client.connect()
