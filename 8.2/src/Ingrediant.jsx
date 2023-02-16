import { data } from "./data"
import './Ingrediant.css'
// import Ninja from "./Ninja"
// import App from "./App"

export default function Ingrediant(props) {

  // let [text, setText] = useState('l')



  const ings = data.map((ninja) => {
    return ninja.pizzaToppings;


  })

  const ingNameImg = ings.map((ing) => {
    return ing.map((topping) => {
      return {
        name: topping.name,
        img: topping.img
      };
    });
  }).flat();



  const classes = 'ingCard ' + props.className;

  const ingDiv = ingNameImg.map((ing) => {
    return <div className={classes} key={ing.name}>
      <h4>{ing.name}</h4>
      <img src={ing.img} alt={ing.name} />
    </div>;
  })
  if (ingNameImg[0].name === 'Pepperoni') {
    console.log('check');
  }
  return <>{ingDiv}</>
}