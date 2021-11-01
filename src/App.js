import React,{useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';
import history from './services/history';





function App() {
  return (
    <>
      <BrowserRouter history={history}>
      <Routes>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App; 
