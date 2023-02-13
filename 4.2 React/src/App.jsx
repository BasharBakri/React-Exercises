import './App.css';
import Quiz from './Quiz';
import QuizTitle from "./QuizTitle";
import Q1 from "./Q1";
import Q1Title from "./Q1Title";
import Q1Input from "./Q1Input";
import Q2 from "./Q2";
import Q2Title from "./Q2Title";
import Q2Input from "./Q2Input";

function App() {
  return (
    <Quiz>
      <QuizTitle>
      </QuizTitle>
      <Q1>
        <Q1Title>
        </Q1Title>
        <Q1Input>
        </Q1Input>
      </Q1>
      <Q2>
        <Q2Title>
        </Q2Title>
        <Q2Input>
        </Q2Input>
      </Q2>
    </Quiz>
  )
}

export default App
