import React from "react";
import ReactDOM from "react-dom";
import {ExerciseDescription, SolutionArea, inputs, GlobalStyles} from 'react-exercises-ui'
import Actors from "./WorldChampions";

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...inputs.ex03}/>
      <SolutionArea component={<Actors drivers={[{ name: 'Nigel Mansell', isWorldChampion: true }, { name: 'Keke Rosbert', isWorldChampion: false }, { name: 'Alain Prost', isWorldChampion: true }]}/>} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
