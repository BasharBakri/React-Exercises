import { useState } from 'react'
import './App.css'
import Button from "./Button";


function App() {
  const colors = ["blue", "red", "yellow"];
  const [text, setText] = useState('')

  // function HandleClick() { }


  // const btns =

  return <>{

    colors.map((color) => {
      return <Button key={color} classType={color} name={color} fnClick={setText}></Button>
    })

  }
    <h2>The color of this button is: {text}</h2>
  </>
}

export default App
