import React from 'react';
import { render } from 'react-dom';
import App from './pages/home/App';
import Login from './pages/login';
import GlobalStyle from './styles/global';

render(
  <React.StrictMode>
    <Login />
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

