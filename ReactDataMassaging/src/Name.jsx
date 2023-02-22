

export default function Name(props) {

  console.log(props.name);


  return (<>
    <span> {props.name[0]} </span>
    <span> {props.name[1]} </span>
    <span> {props.name[2]} </span>
    <span> {props.name[3]} </span>
    <span> {props.name[4]} </span>

  </>)


}