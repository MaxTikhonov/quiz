
import styles from './app.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Result from '../Result/Result';
import Game from '../Game/Game';
import english_questions from '../jsons/english_questions.json';
import mathem_questions from '../jsons/mathem_questions.json';
import russian_questions from '../jsons/russian_questions.json';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';



function App() {
  const allQuestions = [];
  allQuestions.push(english_questions);
  allQuestions.push(mathem_questions);
  allQuestions.push(russian_questions);
  const [number, setNumber] = useState(0);
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const question = allQuestions[number][step];

  const onClickVariant = (index) => {
    setStep((prev) => prev + 1);
    if (index === question.correct) {
      setCount((prev) => prev + 1);
    }
  }

  const onClickDiscipline = (index) => {
    setNumber(index);
  }

  if (performance.getEntriesByType("navigation")[0].type === 'reload') {
    window.location = 'http://localhost:3000/';
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Navbar onClickDiscipline={onClickDiscipline} />} />
          <Route path='/englishquiz' element={step !== english_questions.length ? (<div className={styles.App}><Game step={step} data={question} onClickVariant={onClickVariant} questions={english_questions} /></div>) : (<Result count={count} questions={english_questions} />)} />
          <Route path='/mathemquiz' element={step !== mathem_questions.length ? (<div className={styles.App}><Game step={step} data={question} onClickVariant={onClickVariant} questions={mathem_questions} /></div>) : (<Result count={count} questions={mathem_questions} />)} />
          <Route path='/russianquiz' element={step !== russian_questions.length ? (<div className={styles.App}><Game step={step} data={question} onClickVariant={onClickVariant} questions={russian_questions} /></div>) : (<Result count={count} questions={russian_questions} />)} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
