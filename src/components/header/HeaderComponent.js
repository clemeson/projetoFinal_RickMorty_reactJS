/* eslint-disable jsx-a11y/alt-text */
import React from "react";
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
                    <li><a href='/'><Btn text='Home'/></a></li>
                    <li><a href='/'><Btn text='História'/></a></li>
                    <li><a href='/'><Btn text='Personagens'/></a></li>
                    <li><a href='/'><Btn text='Planetas'/></a></li>   
                </ul>
            </nav>
        </header>
    )
}