import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [cl, setCl] = useState('scale')
  const [cl2, setCl2] = useState('scale')


  // I don't know how to use useRef to solve this problem, I tried.


  return (
    <div className='container'>
      <img src="https://picsum.photos/300/" alt="2" onMouseOver={() => setCl('color')} onMouseOut={() => { setCl('scale') }} className={cl} />
      <br />
      <br />
      <img src="https://picsum.photos/300/300" alt="1" onMouseOver={() => setCl2('color')} onMouseOut={() => { setCl2('scale') }} className={cl2} />
    </div>
  )

}

export default App
