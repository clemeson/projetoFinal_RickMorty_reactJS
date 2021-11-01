import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url ('https://fonts.googleapis.com/css2? family = M + PLUS + Arredondado + 1c: wght @ 500 & display = swap');
  
  body{
    background-image: radial-gradient(circle, #601281, #491467, #35124d, #230e34, #14031c);
    /*
    background-image: radial-gradient(circle, #9b08da, #7217a7, #4e1776, #2e1247, #14031c);
    */
  }
  
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  *{
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
  }


`



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


