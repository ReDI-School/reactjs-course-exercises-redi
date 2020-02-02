import React from "react";
import ReactDOM from "react-dom";
import Actors from "./Actors";
import {ExerciseDescription, SolutionArea, loops, GlobalStyles} from 'react-exercises-ui'

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...loops.ex01}/>
      <SolutionArea component={<Actors names={['Arnold', 'Silvester', 'Steven']}/>} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
