import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, props, GlobalStyles} from 'react-exercises-ui'
import ScoreDetails from './ScoreDetails';

function App() {
  return (
    <>
      <GlobalStyles />
      <ExerciseDescription{...props.ex04} />
      <SolutionArea component={<ScoreDetails scores={[80, 50]} />} />

    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
