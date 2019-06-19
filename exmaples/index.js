import React from 'react';
import { render } from 'react-dom';


const rootEl = document.getElementById('app');

render(<App />, rootEl);

if (module.hot) {
    module.hot.accept();
}