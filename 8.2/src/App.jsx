import { useState } from 'react'
import './App.css'
import Ninja from './Ninja'
import Ingrediant from './Ingrediant'

function App() {
  let [text, setText] = useState(' ')

  const [myArr, updatemyArr] = useState(['']);

  const onClick = (buttonName) => {
    if (myArr.length < 5) {
      if (myArr.find((el) => el.trim() === buttonName)) {
        setText('You already selected this');
        setTimeout(() => {
          setText('')
        }, 1000);
      } else {
        updatemyArr(arr => [...arr, ` ${buttonName}`]);
      }
    } else {
      setText('Maximum ingredients');
    }
  };



  return (<>
    <h1>Ninja Turtles</h1>
    <h2>Order Pizza with the Ninja Turtles</h2>
    <section className='ninjaContianer'>
      <Ninja fnClick={onClick} />
    </section>
    <h2>Our Order:{myArr} </h2>
    <p>{text}</p>
    <div className='ingContainer' >
      <Ingrediant  ></Ingrediant>
    </div>
  </>
  )

}

export default App
