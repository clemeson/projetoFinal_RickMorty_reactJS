import React,{useState, useEffect} from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';
import history from './services/history';
import Header from './components/HeaderComponent'




function App() {
  return (
    <>
      <BrowserRouter history={history}>
      <Header> </Header>
      <Routes>

      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App; 
