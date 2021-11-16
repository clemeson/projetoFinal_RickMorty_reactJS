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

                
                <section id='sec-title2'>
                <div className="container-topo2">
                    <div className="container_text2">
                    <h1 className=" img_tabela2 ">  Pronto para aventurar-se no multiverso Rick and Morty?  </h1>
                    
                    </div>
                    <div className="img_container2">
                        <img className="img_black2" src={portal} />
                    </div>
                    </div>
                </section>
                
                <div id="linha-horizontal"></div>

                <section id='sec-title3'>
                <div className="container-topo3">
                    <div className="container_text3">
                    <h1 className="img_tabela3">  Vamos viajar num mundo diferente, perscrutar dimensões e galáxias, conhecer personagens e por onde andam a nossa dupla de viajantes intergalácticos preferida</h1> 
                    
                    </div>
                    <div className="img_container3">
                    <Link id="link" to="/character"> Vamos Começar?</Link>
                    <p className='sms-link3'>Cique aqui para ser redirecionado à página de personagens.</p>
                    </div>
                    </div>
                </section>
                    
                    <div id="linha-horizontal"></div>

                <section id='sec-title4'>
                <div className="container-topo4">
                    <div className="container_text4">
                    <h1 className="img_tabela4" >  Navegue num mar de curiosidades da nossa comunidade de fãs da melhor série animada do mundo!</h1> 
                    </div>
                    <div className="img_container4">
                        <img className="img_black4" src={mortyhead} />
                        <img className="img_black42" src={rickhead}/>
                    </div>
                    </div>
                </section>
                
                <div id="linha-horizontal"></div>

                <section id='sec-title5'>
                <div className="container-topo5">
                    <div className="container_text5">
                    <h1 className="img_tabela5"> Experimente também na versão Mobile!</h1> 
                    </div>
                    <div className="img_container5">
                        <img className="img_black5" src={gifcell} />
                    </div>
                    </div>
                </section>

                <div id="linha-horizontal"></div>

                <section id='sec-title6'>
                <div className="container-topo6">
                    <div className="container_text6">
                    <h1 className="img_tabela6" > Ninguém existe por um propósito. Ninguém pertence a lugar nenhum. Todo mundo vai morrer. Vem ver TV </h1> 
                    </div>
                    <div className="img_container6">
                    <a href= " https://www.netflix.com/br/ " target="_blank"> <img className="img_black6" src={net} /> </a> 
                        <a  href="https://play.hbomax.com/page/urn:hbo:page:home"  target="blank"> <img className="img_black61" src={hbo} /> </a>
                    </div>
                    </div>
                </section>

                <div id="linha-horizontal"></div>

            </div>
        </div>
    )
}