import React from 'react';
import ReactDOM from 'react-dom';
import App from './epics/App/';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, Global, css } from '@emotion/react';
import resets from './assets';

ReactDOM.render(
  <ThemeProvider theme={'undefined'}>
    <App />
    <Global styles={resets || css``} />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
