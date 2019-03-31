import React, {useState, useEffect} from 'react';
import socketClient from 'socket.io-client'
import talking from './talking.gif'
import nottalking from './nottalking.png'
import Speech from 'speak-tts'

const App = () => {

  const [message, setMessage] = useState('')
  const [image, setImage] = useState(nottalking)
  const socket = socketClient('http://localhost:3003')
  const speech = new Speech()

  useEffect(() => {
    initializeSpeech()
  }, [])

  useEffect(() => {
    socket.on('message', (msg) => {
      console.log(msg)
      speak(msg)
    })
  }, [])

  const initializeSpeech = () => {
    speech.init().then((data) => {
      console.log('Speech is ready ' , data)
    }).catch(error => {
      console.log(error)
    })
  }

  const speak = (msg) => {
    speech.speak({
      text: msg,
      queue: true,
      listeners: {
        onstart: () => {
            setImage(talking)
          },
          onend: () => {
            setImage(nottalking)
          }  
      }
  })
  }

  const messageHandler = (event) => {
    event.preventDefault()
    setMessage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setMessage('')
    speak()
  }

  const Smiley = () => {
    return (
      <div>
        <img src={image} alt="talking head"></img>
      </div>
    )
  }

  return (
    <div>
      <Smiley/>
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={messageHandler}></input>
        <button type="submit">PUHU!</button> 
      </form>
    </div>
  )
}

export default App
