import React,{useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Header from './partials/HeaderComponent'
import Footer from './partials/FooterComponent'
import Home from './pages/home/HomeComponent'
import Sobre from './pages/sobre/SobreComponent'
import Personagens from './pages/characters/PersonagensComponent'
import Location from './pages/location/LocationComponent'




function App() {
  return (
    <>
    <BrowserRouter>
    <Header link = {Link}></Header>
    
  



    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/personagens"> 
        <Personagens></Personagens>
      </Route>

      <Route path="/historias">
        <Sobre></Sobre>
      </Route>

    <Route path="/planetas">
      <Location></Location>
    </Route>
    </Switch>


    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App; 