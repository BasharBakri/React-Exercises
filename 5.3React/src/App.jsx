
import './App.css'
import Child from './Child'

function App() {
  const kids = [
    { name: 'Ori', color: 'red' },
    { name: 'Ron', color: 'blue' },
    { name: 'Sigalit', color: 'green' },
    { name: 'Ruti', color: 'yellow' },
    { name: 'Alon', color: 'purple' },
  ]

  const kidInfo = kids.map((kid) => {
    return <Child name={kid.name} color={kid.color} />
  })

  return (<div className='grandContainer'>
    <h1>A tale of five balloons</h1>
    <div className='container'>
      {kidInfo}
    </div>
  </div>)

}

export default App
