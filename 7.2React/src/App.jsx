import { useState } from 'react'
import './App.css'

function App() {

  let [checked, setCheck] = useState(true)

  return (
    <div>
      <form action="#">
        <input type="checkbox" name="" id="1" /><label htmlFor="1">I read the terms of the app</label>
        <br />
        <input type="checkbox" name="" id="2" /><label htmlFor="2">I accept the terms of the app</label>
        <br />
        <input type="checkbox" name="" id="3" defaultChecked={checked} onChange={() => setCheck((checked) => checked === true ? false : true)} /><label htmlFor="3">I want to get the weekly news letter</label>
        {/* 
        I need to understand fully why all of these options work:
        setCheck(!checked) 
        setCheck((checked) => checked === true ? false : true)
        setCheck((checked === true ? false : true))
        setCheck(() => checked === true ? false : true)
          */}
        <br />
        <input type="checkbox" name="" id="4" defaultChecked={checked} /><label htmlFor="4" checked>I want to get sales and offers {console.log(checked)}</label>
      </form>
    </div>
  )
}

export default App
