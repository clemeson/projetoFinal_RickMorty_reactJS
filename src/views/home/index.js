/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import img_black from './img/bg_welcome.png';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter';

import portal from './img/portal.gif';
import rickhead from './img/rick.gif';
import mortyhead from './img/morty.gif';
import gifcell from './img/gifcell.gif';
import squanch from './img/squanch.gif';
import { useEffect, useState } from "react/cjs/react.development";






export default function Home() {

    const handleType = (count: number) => {
        // access word count number
        console.log(count)
    }

    const handleDone = () => {
        return 2
    }

    return (

        <div id='body'>
            <div id="containerHome">
                <section id='sec-title'>
                    <div className="container_text">
                    <h1 className="text-prepare">Prepare-se para ver como realmente se reutiliza component</h1>
                    <button className="button_started">Get Started</button>

                    </div>
                    <div className="img_container">
                        <img className="img_black" src={img_black} />
                    </div>

                </section>
                <section className='sections'>

                    <div id='portal-div'>

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