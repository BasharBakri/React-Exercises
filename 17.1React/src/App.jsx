import Form from './Form'
import Todos from './Todos'
import './App.css'
import { useState } from 'react';

function App() {

  // I can't connect the delete button to the input 
  // I can't save the input if it's checked in the local storage for now.

  const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todoStorage') || '[]'))
  const receiveInput = (input) => {
    const prv = [...todo, input];


    setTodo(prv)
    console.log(todo);
    localStorage.setItem('todoStorage', JSON.stringify(prv));

  }



  const deleteFn = (id) => {
    const newData = todo.filter((item, index) => {
      return index !== id;
    })
    setTodo(newData)
    localStorage.setItem('todoStorage', JSON.stringify(newData));
  }



  return (
    <div className='container'>
      <h1>To Do's:</h1>
      <Form sendInput={receiveInput} />
      {todo && todo.map((onedo, index) => {
        return <Todos id={index} item={onedo} delete={deleteFn} />
      })}

    </div>
  )

}

export default App
