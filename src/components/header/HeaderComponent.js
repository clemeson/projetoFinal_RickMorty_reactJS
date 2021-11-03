/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {Link} from 'react-router-dom'
import './header.css'
import Btn from "./btn/Btn";
import Logo from './img/logo_rick.png'
import Icon from './img/icon-menu.svg'


export default function Header() {

    function toggleMenu (){
        const nav = document.querySelector('#nav')
        nav.classList.toggle('active')  
    }

    return(
        <header id='header'>
            <img id='logo' src={Logo}></img>
            <nav id='nav'>

                <button 
                id='btn-menu' 
                onClick= {toggleMenu}
                ><img id='icon-menu' src={Icon}></img></button>

                <ul id='menu'>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/character">Personagens</Link>
                    </li>
                    <li>
                    <Link to="/locations">Planetas</Link>
                    </li>
                    <li>
                    <Link to="/about">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}