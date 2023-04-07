import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './App.css'

export default function MyButton() {
    const [correct, setCorrect] = useState(false);


    return (
        <div class="button">
            <Button variant="contained">Guess</Button>
        </div>
    );
}




