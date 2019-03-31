require('dotenv').config()
const io = require('socket.io')()
const tmi = require('tmi.js')

const PORT = process.env.PORT
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
let message = ''

const onMessageHandler = (target, context, msg, self) => {
    if (self){
        return
    } else if (msg.length < 5){
        return
    }

    const command = msg.substring(0, 4)
    const toTheHead = msg.substring(5, msg.length)

    if (command === '!paa' && msg.substring(4,5) === ' '){
        message = toTheHead
        if (message === 'tj'){
            message = 'Chief executive officer.'
        }
        console.log('Sending: ', message)
        io.emit('message', message)
    } 
}

const onConnectionHandler = (addr, port) => {
    console.log('Connected to ', addr, port)
}

client.on('message', onMessageHandler)
client.on('connected', onConnectionHandler)
client.connect()

io.on('connection', (socket) => {
    console.log('Front connected')
    socket.on('disconnect', ()=> {
        console.log('Front disconnected')
    })
})

io.listen(PORT)
console.log('Kuunnellaan porttia ', PORT)