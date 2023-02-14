import { useState } from 'react'
import './App.css'

function App() {

  let [num, setNum] = useState(0);


  const numClass = function () {
    if (num === 0) {
      return 'black'
    } else if (num > 0) {
      return 'positive'
    } else if (num < 0) {
      return 'negative'
    }
  };

  return (
    <div className='container' >
      <button onClick={() => { setNum((prevNum) => prevNum >= 10 ? prevNum : prevNum + 1) }} >Increment</button>


      {/* Why does the first button require one click but the second button needs two clicks I don't understand */}
      <button onClick={() => { setNum((prevNum) => prevNum <= -10 ? prevNum : prevNum - 1) }} >Decrement</button>
      {/* <button onClick={() => { setNum(num <= -10 ? num : num--) }} >Decrement</button> */}
      <section className={numClass()}>{num}</section>
    </div>
  )

}

export default App
