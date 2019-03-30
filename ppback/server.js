const io = require('socket.io')()
//const bot = require('./bot')
let msg = ''

io.on('connection', socket => {
    console.log('Connected')
    setInterval(() => {
        socket
        .emit('message', msg)
    }, 1000);
})

const port = 3003
io.listen(port)
console.log('Kuunnellaan porttia ', port)