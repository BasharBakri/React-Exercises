import './App.css';
import Button from "./Button";

function App() {
  const data = [{
    name: 'Important'
  },
  {
    name: 'Not Important'
  }
  ]
  return (
    <div className='container' >
      <Button name={data[0].name} style={{ fontWeight: 'bold' }}></Button>
      <Button name={data[1].name} ></Button>
    </div>
  );
}

export default App;
