import React from "react";
import ReactDOM from "react-dom";
import {ExerciseDescription, SolutionArea, inputs, GlobalStyles} from 'react-exercises-ui'
import Actors from "./Actors";

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...inputs.ex02} />
      <SolutionArea component={<Actors actors={[{ name: 'Arnold', age: 71 }, { name: 'Silvester', age: 72 }]}/>} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
