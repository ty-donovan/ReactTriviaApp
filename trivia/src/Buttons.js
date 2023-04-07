import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './App.css'

export default function MyButton(props) {

    

    return (
        <div class="button">
            <Button variant="contained">{props.text}</Button>
        </div>
    );
}




