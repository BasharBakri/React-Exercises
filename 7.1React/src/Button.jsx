import './Button.css'

export default function Button({ classType, name, fnClick }) {


  return <button className={classType} onClick={() => { fnClick(name) }}>{name}</button>
}