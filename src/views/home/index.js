import React from "react"
import './style.css'
import imagem  from './portall.gif';
import rick from './and.gif'
import core from './core.gif';


function Home(){


    return (

        <div className="pai">
        
                    <h1 className="nome1">R I C K </h1>
                    <h2 className="nome2"> A N D </h2>
                    <h3 className="nome3"> M O R T Y</h3>
                
            <img className="img" src={imagem} alt=""/> 
            <img className="img2" src={rick} alt=""/>
            <img className="img3" src={core} alt=""/>
             
        </div>
    
    )
}

export default Home;