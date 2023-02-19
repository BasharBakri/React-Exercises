import { useState } from 'react'
import './App.css'

function App() {

  let [number1, setNumber1] = useState(0)

  return (
    <div>
      <button onClick={() => { setNumber1(number1 += 1) }} >Increment</button>
      <p>{number1}</p>
    </div>
  )

}

export default App
