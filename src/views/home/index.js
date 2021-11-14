/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import img_black from './img/bg_welcome.png';
import iconDown from './img/down.svg';
import './responsive.css'
import rickhead from './img/rick.gif';
import mortyhead from './img/morty.gif';
import gifcell from './img/gifcell.gif';
import squanch from './img/squanch.gif';
import frame from './img/frame.png';
import { useEffect, useState } from "react/cjs/react.development";
import ModalComponent from '../../components/Modal';






export default function Home() {
    const [showModal, setShowModal] = useState('')
   function setModal(){
       console.log('ok')
       setShowModal(1)
   }
 
    
   

    return (

        <div id='body'>
            <ModalComponent
             visible={showModal}
             setModal={setShowModal}
             view={true}
            >           
            </ModalComponent>
            <div id="containerHome">
                
                <section id='sec-title'>
                <div className="container-topo">
                    <div className="container_text">
                    <img className="img_tabela" src={frame}/>
                    <button className="button_started" onClick={setModal}>Get Started</button>

                    </div>
                    <div className="img_container">
                        <img className="img_black" src={img_black} />
                    </div>
                    </div>
                    <a href="#sec-title1" className="container-down" ><img class="icon-down" src={iconDown}/></a>
                </section>


             
                <section id='sec-title1'>
                <div className="container-topo">
                <div className="container_text3">
                    <h1>Vamos viajar num mundo diferente, perscrutar dimensões
                         e galáxias, conhecer personagens e por onde andam a nossa dupla de viajantes intergalácticos preferida.
                    Vamos Começar?</h1>
                    <button className="button_started">Get Started</button>

                    </div>
                    <div className="img_container">
                   

                    </div>

                    </div>
                  
                </section>
                
               
            </div>
        </div>
    )
}