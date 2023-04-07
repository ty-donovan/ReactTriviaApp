import './App.css';
import MyButton from './Buttons.js';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import Title from './Title.js'
import Question from './Question';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() { 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  
  const generateQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(jsonResponse => setQuestions(jsonResponse.results))
    .catch(error => console.log("error fetching data from API: ", error))
  }

  const getNextQuestion = () => {
    if (questions.length === 0){
      setCurrentQuestion("There are no questions currently")
    } else if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(questions[currentQuestionIndex].question);
    }
  }

  

  return (
    <div class="App">
      <div class="title">
        <Title />
      </div>
      <div class="title">
        <Question question={currentQuestion} />
      </div>
      <div class="button-wrapper">
        <div class="buttons">
          <ThemeProvider theme={theme}>
            <MyButton text="button1"/>
            <MyButton text="button2"/>
            <MyButton text="button3"/>
            <MyButton text="button4"/>
          </ThemeProvider>
        </div>
      </div>
      <div class="button-wrapper">
        <div class='button'>
          <Button variant='contained' onClick={generateQuestions}>Generate New Questions</Button>
        </div>
        <div class='button'>
          <Button variant='contained' onClick={getNextQuestion}>Next Questions</Button>
        </div>
      </div>
    </div>
    
  );
};

export default App;
