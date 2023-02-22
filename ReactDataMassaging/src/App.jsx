import './App.css'
import { data } from './assets/data'
import Name from './Name';
import Card from './Card';

function App() {

  //1
  const allNames = data.map((obj) => {
    return obj.name;
  })
  console.log(allNames);

  //2 

  const before90 = data.filter((obj) => {
    return (!obj.birthday.includes('199'))
  })
  console.log(before90);

  return (
    <div>
      <Name name={allNames} />
      <Card before90={before90} />
    </div>
  )

}

export default App
