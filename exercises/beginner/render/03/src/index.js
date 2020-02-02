import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, render, GlobalStyles} from 'react-exercises-ui'
import BasketballStar from './BasketballStar';

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...render.ex03} />
      <SolutionArea component={BasketballStar} />
      < />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
