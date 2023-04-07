import './App.css';
import MyButton from './Buttons.js';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import Title from './Title.js'
import Question from './Question';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { decode } from 'html-entities';


function App() { 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [text1, setText1] = useState("No answers yet");
  const [text2, setText2] = useState("No answers yet");
  const [text3, setText3] = useState("No answers yet");
  const [text4, setText4] = useState("No answers yet");
  
  const generateQuestions = () => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then(response => response.json())
    .then(jsonResponse => setQuestions(jsonResponse.results))
    .catch(error => console.log("error fetching data from API: ", error))

    setCurrentQuestionIndex(0);
  }

  const getNextQuestion = () => {
    if (questions.length === 0){
      setCurrentQuestion("There are no questions currently")
    } else if (currentQuestionIndex < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentQuestion(decode(questions[currentQuestionIndex].question));
      setText1(decode(questions[currentQuestionIndex].correct_answer));
      setText2(decode(questions[currentQuestionIndex].incorrect_answers[0]));
      setText3(decode(questions[currentQuestionIndex].incorrect_answers[1]));
      setText4(decode(questions[currentQuestionIndex].incorrect_answers[2]));
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
            <MyButton text={text1} correct="true"/>
            <MyButton text={text2}/>
            <MyButton text={text3}/>
            <MyButton text={text4}/>
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
