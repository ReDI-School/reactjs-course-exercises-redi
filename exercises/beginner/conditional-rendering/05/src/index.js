import React from "react";
import ReactDOM from "react-dom";
import FruitPicker from "./FruitPicker";
import {ExerciseDescription, SolutionArea, conditionalRendering, GlobalStyles} from 'react-exercises-ui'

function App() {
  return (
    <>
      <GlobalStyles />
      <ExerciseDescription{...conditionalRendering.ex05} />
      <SolutionArea component={<FruitPicker selected='Apple' />} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
