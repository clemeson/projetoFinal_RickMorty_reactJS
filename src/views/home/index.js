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

import Footer from "../../components/footer";

import portal from './img/portal.gif'
import  net from './img/net.png'
import hbo from './img/hbo.png'







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
            
                </section>


             

                <section id='sec-title'>
                    <div className="container-topo">
                        <div className="container_text">
                            <h1 className="inicio "> Pronto para aventurar-se no multiverso Rick and Morty? </h1>
                        </div>
                        
                        <div className="img_container">
                            <img className="img_black1" src={portal} />
                        </div>
                    </div>
                  
                    
                </section>
                <section id='sec-title'>
                    <div className="container-topo">
                        <div className="container_text">
                            <h1 className="perso"> Vamos viajar num mundo diferente, perscrutar dimensões e galáxias, conhecer personagens e por onde andam a nossa dupla de viajantes intergalácticos preferida</h1>
                        </div>

                        <div className="img_container7">
                            <Link id="link" to="/character"> Vamos Começar?</Link>
                            <p id='sms-link'>Cique aqui para ser redirecionado à página de personagens.</p>
                        </div>
                    </div>
                    
                </section>

                <section id='sec-title'>
                    <div className="container-topo">
                        <div className="container_text">
                            <h1 className="juntos"> Navegue num mar de curiosidades da nossa comunidade de fãs da melhor série animada do mundo! </h1>
                        </div>
                        <div className="img_container">
                            <img className="img_black3" src={mortyhead} />
                            <img className="img_black7" src={rickhead } />
                        </div>
                    </div>
                   
                </section>

                <section id='sec-title'>
                    <div className="container-topo">
                        <div className="container_text">
                            <h1  className="mobile"> Experimente também na versão Mobile!</h1>
                        </div>
                        <div className="img_container">
                            <img className="img_black4" src={gifcell } />
                        </div>
                    </div>
                
                </section>
                <section id='sec-title'>
                    <div className="container-topo">
                        <div className="container_text">
                            <h1 className="bora"> Ninguém existe por um propósito. Ninguém pertence a lugar nenhum. Todo mundo vai morrer. Vem ver TV </h1>
                        </div>
                        <div className="img_container">
                            <a href= " https://www.netflix.com/br/ " target="_blank"> <img className="img_black5" src={net} /> </a> 
                            <a  href="https://play.hbomax.com/page/urn:hbo:page:home"  target="blank"> <img className="img_black8" src={hbo} /> </a>
                        </div>
                    </div>
                  
                </section>
            </div>
        </div>
    )
}