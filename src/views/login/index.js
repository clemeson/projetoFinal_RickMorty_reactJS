import React,{useState, useEffect} from "react";
import './style.css'
import {Redirect, Link, Route, Switch} from 'react-router-dom'



export default function Login(){



    const [apelido, setApelido] = useState(localStorage.getItem('apelido'))
    function setNome(){
        localStorage.setItem('apelido', apelido)   
    
        console.log(localStorage)
    }

    useEffect(() => {

     setNome()
    

    },[apelido])
 

    return(
        <div id='sec-login'>
            <form id='div-login'>
                <h1 className='txt-h1'>Como você gosta de ser chamado ? </h1>
                <p className='txt-p'>Precisamos saber seu nome, para identificar seus posts!</p>
                <input className='txt-inputs' required type='text' onChange={e => setApelido(e.target.value)} placeholder='Digite aqui seu nome ou apelido'></input>
               {apelido? <Link to="/fanfics/posts"> Vamos lá</Link> : <Link to="/fanfics/posts"> </Link>}

            </form>
        </div>
    )
}