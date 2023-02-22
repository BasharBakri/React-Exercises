import { useState } from "react";
export default function Form(props) {

  const [input, setInput] = useState('')
  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput('')


    props.sendInput(input);
  }


  return (<>
    <form method="post" onSubmit={handleSubmit}>
      <label htmlFor=""><strong>Add a To do: </strong></label>
      <input onChange={handleChange} type="text" value={input} />
      <button type='submit' >Add</button>

    </form>
  </>)
}