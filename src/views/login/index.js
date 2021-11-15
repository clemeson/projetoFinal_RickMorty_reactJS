import React,{useState} from "react";
import './style.css'
import {Redirect} from 'react-router-dom'



export default function Login(){



    const [apelido, setApelido] = useState('')
    
    function setNome(){
        localStorage.setItem('apelido', apelido)
        if(apelido){
            <Redirect to="/fanfics/posts" />
        }else{
            <Redirect to="/login" />
        }
       
    }

    return(
        <div id='sec-login'>
            <div id='div-login'>
                <h1 className='txt-h1'>Como você gosta de ser chamado ? </h1>
                <p className='txt-p'>Precisamos saber seu nome, para identificar seus posts!</p>
                <input className='txt-inputs' required type='text' onChange={e => setApelido(e.target.value)} placeholder='Digite aqui seu nome ou apelido'></input>
                <button id='btn-logar' onClick={setNome}>Vamos lá!</button>
            </div>
        </div>
    )
}