import React from 'react';
import ReactDOM from 'react-dom';
import {ExerciseDescription, SolutionArea, render, GlobalStyles} from 'react-exercises-ui'
import BookDetails from './BookDetails';

function App() {
  return (
    <>
      <GlobalStyles/>
      <ExerciseDescription {...render.ex04} />
      <SolutionArea component={<BookDetails />} />
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
