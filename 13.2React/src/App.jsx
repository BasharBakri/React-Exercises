import { animator } from 'chart.js';
import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'

function App() {

  let [divClass, setDivClass] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setDivClass('animtion')
    }, 100)
    setTimeout(() => {
      setDivClass('')
    }, 4000)
  }, [])
  console.log('componentCheck');
  return (
    <>
      <div className={`box1 ${divClass}`}>
      </div>
      <br />
      <div className={`box2 ${divClass}`}>
      </div>
      <br />
      <div className={`box3 ${divClass}`}>
      </div>
    </>
  )

}

export default App
