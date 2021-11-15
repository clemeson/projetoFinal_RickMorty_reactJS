import React from "react";
import './style.css'
import { Link } from "react-router-dom";


export default function Login(){
    return(
        <div id='sec-login'>
            <div id='div-login'>
                <h1 className='txt-h1'>Login</h1>
                <p className='txt-p'>Entre ou <Link to='/cadastre-se'>cadastre-se</Link></p>
                <input className='txt-inputs' type='email' placeholder='Insira seu e-mail'></input>
                <input className='txt-inputs' type='password' placeholder='Insira sua senhha'></input>
                <button id='btn-logar'>Entrar</button>
            </div>
        </div>
    )
}