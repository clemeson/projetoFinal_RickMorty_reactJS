import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2? family = M + PLUS + Arredondado + 1c: wght @ 500 & display = swap');
  
  #root{

    height: 100vh;
<<<<<<< HEAD
    width:60%;
    margin:0 auto;

   
=======
    width:100%;
>>>>>>> 0647c569f46e1ffc7de4b3a7c6cbeeffb10f6c07
  }

body{
animation: gradient 10s ease alternate infinite;
<<<<<<< HEAD
background: radial-gradient(circle, rgba(45,1,64,1) 0%, rgba(1,0,13,1) 100%);
=======
background-image: radial-gradient(circle, #1b0126, #270838, #37094c, #48075f, #5a0273);
>>>>>>> 0647c569f46e1ffc7de4b3a7c6cbeeffb10f6c07
background-size: 300% 300%;
height: 100vh;

}

@keyframes gradient{
    from{
        background-position: 0 50%;
    }
    to{
        background-position: 100% 50%;
    }
    
}
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


