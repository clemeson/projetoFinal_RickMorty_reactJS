/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {Link} from 'react-router-dom'
import './header.css'
import Btn from "./btn/Btn";
import Logo from './img/logo_rick.png';
import Icon from './img/icon-menu.svg';
import styled, {keyframes} from 'styled-components';


const keyLine = keyframes`
0%{
    border-width: 2px solid #74E452;
    width: 1%;
    transition: all 0.5s ease-out
}

50%{
    border: 2px solid #74E452;
    width: 50%;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px #74E452 inset;

}
100%{
    border: 2px solid #74E452;
    width: 90%;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px #74E452 inset;
}

`


const keyLine2 = keyframes`
0%{
<<<<<<< HEAD

=======
    border-width: 2px solid #D705F2;
>>>>>>> 1c1657d262892b06ad783b8418e4fd4d19028c2e
    width: 1%;
    transition: all 0.5s ease-out
}

50%{
    border: 2px solid #D705F2;
    width: 50%;
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;

}
100%{
    border: 2px solid #D705F2;
    width: 90%;
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;
}


`
const Hr = styled.hr`
    
    animation-name: ${keyLine};
<<<<<<< HEAD
    animation-duration: .9s;
=======
    animation-duration: 1.2s;
>>>>>>> 1c1657d262892b06ad783b8418e4fd4d19028c2e
    animation-timing-function: ease;
    border: 2px solid #74E452;


    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px #74E452 inset;

    
    

`


const HrPurple = styled.hr`

animation-name: ${keyLine2};
animation-duration: 1.2s;
border: 2px solid #D705F2;

    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;

`


export default function Header() {

    function toggleMenu (){
        const nav = document.querySelector('#nav')
        nav.classList.toggle('active')  
    }

    return(
        <>
        <header id='header'>
            <img id='logo' src={Logo}></img>
            <nav id='nav'>

                <button 
                id='btn-menu' 
                onClick= {toggleMenu}
                ><img id='icon-menu' src={Icon}></img></button>

                <ul id='menu'>
                    <li>
                    <Link className="link" to="/"><Btn text='Home'/></Link>
                    </li>
                    <li>
                    <Link className="link" to="/character"><Btn text='Personagens'/></Link>
                    </li>
                    <li>
                    <Link className="link" to="/location"><Btn text='Localização'/></Link>
                    </li>
                    <li>
                    <Link className="link" to="/about"><Btn text='Sobre'/></Link>
                    </li>
                </ul>
            </nav>
        </header>
        <Hr></Hr>
        <HrPurple></HrPurple>
        </>
    )
}