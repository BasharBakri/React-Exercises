import { animator } from 'chart.js';
import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function App() {

  let [divClass, setDivClass] = useState('');


  useEffect(() => {
    setDivClass('animtion')
    setTimeout(() => {
      setDivClass('round')
    }, 3000)
  }, [])




  return (
    <>
      <div className={`box1 ${divClass}`}>
      </div>
    </>
  )

}

export default App
