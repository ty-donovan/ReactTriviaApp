import React from 'react';
import { Typography } from '@material-ui/core';


function QuestionText(props) {
  return (
    <Typography variant="h3" style={{color: 'white'}}>{props.question}</Typography>
  );
}

export default QuestionText;