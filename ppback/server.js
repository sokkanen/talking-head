require('dotenv').config()
const io = require('socket.io')()
const bot = require('./bot')
let msg = '' // TÄHÄN MUUTTUJAAN BOTILTA TULEVA VIESTI

const PORT = process.env.PORT

io.on('connection', socket => {
    console.log('Connected')
    setInterval(() => {
        socket
        .emit('message', msg)
    }, 1000);
})

io.listen(PORT)
console.log('Kuunnellaan porttia ', PORT)