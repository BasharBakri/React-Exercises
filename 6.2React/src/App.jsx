import { useState } from 'react'
import './App.css'

function App() {

  let [showDiv, setShowDiv] = useState(1)

  return (
    <div className='container' >
      <button onClick={() => { setShowDiv(showDiv += 1) }} >Show/Hide</button>
      <div className={showDiv % 2 === 0 ? 'show' : ''}></div>
    </div>
  )

}

export default App
