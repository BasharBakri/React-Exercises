import './box1.css';


function Box1(prop) {
  return <div className='box1' >{prop.children}</div>;
}

export default Box1;