import { useState } from 'react'
import './App.css'
import { data } from './data'
import Ninja from './Ninja'
import Ingrediant from './Ingrediant'

function App() {
  let [text, setText] = useState('')
  const ingClass = function () {
    if (text === 'Basil') {
      return 'hidden'

    } else { return '1' }
  };


  return (<>
    <h1>Ninja Turtles</h1>
    <h2>Order Pizza with the Ninja Turtles</h2>
    <section className='ninjaContianer'>
      <Ninja fnClick={setText} />
    </section>
    <h2>Our Order:{text} </h2>
    <div className='ingContainer' >
      <Ingrediant className={ingClass()} ></Ingrediant>
    </div>
  </>
  )

}

export default App
