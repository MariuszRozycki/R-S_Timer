import React, { useState, useEffect } from "react";
import './App.css';

function TimerFunction(props) {

  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setInterval(() => {
      setValue(value + 1);
    }, 1000);
  });

  return (
    <React.Fragment>
      <p>Timer function component: {value}</p>
    </React.Fragment>


  )
}

export default TimerFunction;