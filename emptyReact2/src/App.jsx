import { useRef } from 'react'
import './App.css'

function App() {
  const video = useRef(null);

  return (
    <div className='container'>
      <video ref={video} width="320" height="240" >
        <source src="https://www.w3schools.com/tags/movie.mp4" type="video/mp4" />
      </video>
      <button onClick={() => { video.current.play() }} >Play</button>
      <button onClick={() => { video.current.pause() }} >Pause</button>
    </div>
  )

}

export default App
