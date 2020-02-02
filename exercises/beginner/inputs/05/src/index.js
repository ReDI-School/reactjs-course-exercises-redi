import React from "react";
import ReactDOM from "react-dom";
import FruitPicker from "./FruitPicker";
import {ExerciseDescription, SolutionArea, inputs, GlobalStyles} from 'react-exercises-ui'

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...inputs.ex05} />
      <SolutionArea component={<FruitPicker selected='Apple' />} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
