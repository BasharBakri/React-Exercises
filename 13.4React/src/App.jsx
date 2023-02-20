import { useEffect, useState, useRef } from 'react';
import './App.css';
import Spinner from './assets/Spinner';

function App() {
  const [state, setState] = useState(true);
  const [num, setNum] = useState(5);
  const numRef = useRef(num);

  useEffect(() => {
    const intervalId = setInterval(() => {
      numRef.current -= 1;
      setNum(numRef.current);
      console.log(numRef.current);
      if (numRef.current === 0) {
        console.log(state);
        clearInterval(intervalId);
        setState(false);
      }
    }, 1000);

    console.log('effectCheck');
    return () => {
      console.log('returnCheck');
      clearInterval(intervalId)
    };
  }, []);

  console.log('componentCheck');
  return (
    <div>
      <h1>{num}</h1>
      {state && <Spinner />}
    </div>
  );
}

export default App;
