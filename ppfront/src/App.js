import React, {useState, useEffect} from 'react';
import socketClient from 'socket.io-client'
import talking from './talking.gif'
import nottalking from './nottalking.png'
import Speech from 'speak-tts'

const App = () => {

  const [image, setImage] = useState(nottalking)
  const [activated, setActivated] = useState(false)
  const socket = socketClient('http://localhost:3003/')
  const speech = new Speech()

  useEffect(() => {
    initializeSpeech()
  }, [])

  useEffect(() => {
    socket.on('message', (msg) => {
      console.log('Head: ', msg)
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

  const activateSpeech = () => { // User action required by Chrome
    console.log('Speech activated')
    setActivated(true)
  }

  const ActivateButton = () => {
      return (
        <div>
          <button onClick={activateSpeech}>Activate Speech</button> 
        </div>
      )
  }

  const Smiley = () => {
    return (
      <div>
        <img src={image} alt="talking head"></img>
      </div>
    )
  }

  const Contents = () => {
    if (activated === true){
      return (
        <div>
        <Smiley/>
        </div>
      )
    }
    return (
      <div>
        <Smiley/>
        <ActivateButton/>
      </div>
    )
  }

  return (
    <div>
      <Contents/>
    </div>
  )
}

export default App
