import React from "react";
import ReactDOM from "react-dom";
import {ExerciseDescription, SolutionArea, render, GlobalStyles} from 'react-exercises-ui'
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...render.render}/>
      <SolutionArea component={<Welcome />} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
