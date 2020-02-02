import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, props, GlobalStyles} from 'react-exercises-ui'
import TotalScore from './TotalScore';

function App() {
  return (
    <>
      <GlobalStyles />
      <ExerciseDescription{...props.ex05} />
      <SolutionArea component={<TotalScore scores={[34, 35, 36]} />}/>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
