import { useState } from 'react'
import './App.css'
import Button from "./Button";


function App() {
  const colors = ["blue", "red", "yellow"];

  const btnClr = colors.map((color) => {
    return <Button key={color} className={color} name={color} onClick={handleButtonClick} ></Button>
  });
  let [text, setText] = useState('');

  // I didn't fully understand how to add the click event to each button. some code was copied
  function handleButtonClick(propName) {
    setText(propName);
  }
  return (<>
    <div>
      {btnClr}
    </div>
    <h3>The color selected is: {text}</h3>
  </>
  )
}

export default App
