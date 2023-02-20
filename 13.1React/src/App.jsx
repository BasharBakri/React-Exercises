import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [favColor, setfavColor] = useState('blue');

  useEffect(() => {
    setTimeout(() => {
      setfavColor('red')
    }, 1000);
  }, [])

  return (
    <>
      <h1>My favorite color is: {favColor}</h1>
      <div id='1' ></div>
    </>
  )

}

export default App
