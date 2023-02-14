import './Button.css'

export default function Button(props) {


  return <button className={props.className} onClick={() => props.onClick(props.name)}>{props.name}</button>
}