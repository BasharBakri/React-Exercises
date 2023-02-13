import './Card.css'

function Card(props) {

  return <div className='card'>
    <img src={props.src} alt="" />
    <h3>{props.name}</h3>
    <p>{props.desc}</p>
    <footer className='linkContainer'>
      <a href="https://www.google.com/">Share</a>
      <a href="https://www.google.com/">Explore</a>
    </footer>
  </div>
}

export default Card;