import React from 'react';
import { render } from 'react-dom'
import Speech from '../src/component/Speech'

const App = () => {
  return(
    <Speech>
      test
    </Speech>
  );
};
render(<App />, document.getElementById('root'));