import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus()

  }, [])
  console.log('check render');
  return (
    <div className='container'>
      <label htmlFor="">Auto Focus Input:</label>
      <input type="text" ref={refInput} />
    </div>
  )

}

export default App
