import './App.css';
import MyButton from './Buttons.js';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";

function App() { 
  return (

    <div class="buttons">
      <ThemeProvider theme={theme}>
        <MyButton />
        <MyButton />
        <MyButton />
        <MyButton />
      </ThemeProvider>
    </div>
  );
};

export default App;
