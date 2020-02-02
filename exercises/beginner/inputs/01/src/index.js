import React from "react";
import ReactDOM from "react-dom";
import Text from "./Text";
import {ExerciseDescription, SolutionArea, inputs, GlobalStyles} from 'react-exercises-ui'

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription{...inputs.ex01} />
      <SolutionArea component={<Text />} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
