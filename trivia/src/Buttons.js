import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './App.css'

export default function MyButton(props) {
    const [color, setColor] = useState("light-blue")

    const setButtonColor = () => {
        if (props.correct === "reset"){
            setColor("light-blue");
        } else if (props.correct === "true") {
            setColor("green");
        } else {
            setColor("red");
        }
    }

    return (
        <div class="button">
            <Button variant="contained" sx={{ backgroundColor: color }} onClick={setButtonColor}>{props.text}</Button>
        </div>
    );
}




