/* eslint-disable jsx-a11y/alt-text */

import React from "react"
import './style.css'
import { Link } from "react-router-dom"

import portal from './img/portal.gif'
import rickhead from './img/rick.gif'
import mortyhead from './img/morty.gif'
import gifcell from './img/gifcell.gif'
import squanch from './img/squanch.gif'

export default function Home() {

    return(
        <div id='body'>
            <section id='sec-title'>
                <h1 id='title'>Rick & Morty Club</h1>
            </section>
            <section className='sections'>
                <div id='text1'>
                    <h1 id='h1'>Pronto para aventurar-se no multiverso Rick and Morty?</h1>
                    <p id='p'>Navegue num mar de curiosidades da nossa comunidade de fãs da melhor série animada do mundo!</p> 
                </div>
                <div id='portal-div'>
                    <img id='portal' src={portal}></img>
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
    )
}