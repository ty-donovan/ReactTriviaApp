import './App.css';
import MyButton from './Buttons.js';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import Title from './Title.js'

function App() { 
  return (
    <div class="App">
      <div class="title">
        <Title />
      </div>
      <div class="buttons">
        <ThemeProvider theme={theme}>
          <MyButton />
          <MyButton />
          <MyButton />
          <MyButton />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default App;
