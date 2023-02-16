import './Ninja.css';

import { data } from "./data";

export default function Ninja(props) {



  const ninjas = data.map((ninja) => {
    return <div className='ninjaCard' key={ninja.name}>
      <h2>{ninja.name}</h2>
      <img src={ninja.img} alt={ninja.name} />
      <h3>Toppings:</h3>
      <button onClick={() => { props.fnClick(props.ninja.pizzaToppings[0].name) }}>{ninja.pizzaToppings[0].name}</button>
      <button onClick={() => { props.fnClick(ninja.pizzaToppings[1].name) }}>{ninja.pizzaToppings[1].name}</button>
      {/* <button>{ninja.pizzaToppings[2].name}</button> */}
    </div>

  })


  return <>{ninjas}</>
}

