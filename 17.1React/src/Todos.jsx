import { useState } from "react";



export default function Todos(props) {
  const [checked, setCheked] = useState(useState(JSON.parse(localStorage.getItem('checked') || '[]')));


  const handleCheck = (event) => {
    const rememberChecked = [...checked, event.target.checked];


    setCheked(rememberChecked)
    localStorage.setItem('checked', JSON.stringify(rememberChecked));
  }

  return (<>
    <br />
    <form >
      <input type="checkbox" name="" id={props.id} onChange={handleCheck} />
      <span> {props.item} </span>
      <button onClick={() => props.delete(props.id)}  >Delete</button>
    </form>
    <br />


  </>)

}