import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, render, GlobalStyles} from 'react-exercises-ui'
import PremierLeagueFixtures from './PremierLeagueFixtures';

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...render.ex05}/>
      <SolutionArea component={<PremierLeagueFixtures />} />

    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
