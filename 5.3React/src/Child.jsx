import Balloon from "./Balloon"

export default function Child(props) {



  return <div>
    <h3>{props.name}</h3>
    <Balloon balColor={props.color} ></Balloon>
  </div>

}