import React from "react";
import ReactDOM from "react-dom";
import Textarea from "./Textarea";
import {ExerciseDescription, SolutionArea, inputs, GlobalStyles} from 'react-exercises-ui'


function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription{...inputs.ex03} />
      <SolutionArea component={<Textarea value='1. Ferrari, 2. McLaren, 3. Williams' placeholder='Please enter the positions here' />} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
