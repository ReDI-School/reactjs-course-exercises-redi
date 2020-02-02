import React from "react";
import ReactDOM from "react-dom";
import Checkboxes from "./Checkboxes";
import {ExerciseDescription, SolutionArea, inputs, GlobalStyles} from 'react-exercises-ui'

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...inputs.ex04} />
      <SolutionArea component={<Checkboxes terms={true} news={false} />} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
