/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import img_black from './img/bg_welcome.png';
import iconDown from './img/down.svg';



import rickhead from './img/rick.gif';
import mortyhead from './img/morty.gif';
import gifcell from './img/gifcell.gif';
import squanch from './img/squanch.gif';
import frame from './img/frame.png';
import { useEffect, useState } from "react/cjs/react.development";






export default function Home() {

 

   

    return (

        <div id='body'>
            <div id="containerHome">
                
                <section id='sec-title'>
                <div className="container-topo">
                    <div className="container_text">
                    <img className="img_tabela" src={frame}/>
                    <button className="button_started">Get Started</button>

                    </div>
                    <div className="img_container">
                        <img className="img_black" src={img_black} />
                    </div>
                    </div>
                    <a href="#sec-title2" className="container-down" ><img class="icon-down" src={iconDown}/></a>
                </section>
                
                <section className='sections'>

                    <div id='portal-div'>
                    
                    </div>
                    <div id="text-section2">

                    </div>
                </section>
                <section className='sections'>
                    <div id='box-heads'>
                        <img className='heads' src={rickhead}></img>
                        <img className='heads' src={mortyhead}></img>
                    </div>
                    <div id='text2'>
                        <h2 id='h2'>Vamos viajar num mundo diferente, perscrutar dimensões e galáxias, conhecer personagens e por onde andam a nossa dupla de viajantes intergalácticos preferida.</h2>
                        <Link id="link" to="/character"> Vamos Começar?</Link>
                        <p id='sms-link'>Cique aqui para ser redirecionado à página de personagens.</p>
                    </div>
                </section>
                <section id='sec-title2'>
                    <div>
                        <h1 id='end-title'>Experimente também na versão Mobile!</h1>

                    </div>
                    <div id='cell-giffs'>
                        <img id='gifcell' src={gifcell}></img>
                        <img id='squanch' src={squanch}></img>
                    </div>
                </section>
            </div>
        </div>
    )
}