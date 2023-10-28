import './index.scss';
import { useState } from 'react';
import Result from './components/Result';
import Game from './components/Game';
import questions from './questions.json';

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep((prev) => prev + 1)
    if (index === question.correct) {
      setCount((prev) => prev + 1);
    }
  }

  return (
    <div className="App">
      {step !== questions.length ? (<Game step={step} data={question} onClickVariant={onClickVariant} questions={questions} />) : (<Result count={count} questions={questions} />)}
    </div>
  );
}

export default App;
