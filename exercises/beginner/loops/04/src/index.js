import React from "react";
import ReactDOM from "react-dom";
import {ExerciseDescription, SolutionArea, inputs, GlobalStyles} from 'react-exercises-ui'
import Actors from "./User";

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...inputs.ex04} />
      <SolutionArea component={<Actors user={{ name: 'Peter', age: 31 }}/>} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
