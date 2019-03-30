import socketClient from 'socket.io-client'

const socket = socketClient('http://localhost:3003')

const receive = () => {
    socket.on('message', (msg) => {
        console.log(msg)
    })
}

export {receive}