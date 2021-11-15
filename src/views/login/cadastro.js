import React from "react";


export default function CadastreSe() {
    return(
        <div id='sec-login'>
            <div id='div-login'>
                <h1 className='txt-h1'>Cadastre-se aqui!</h1>
                <input className='txt-inputs' type='name' placeholder='Insira seu Nome'></input>
                <input className='txt-inputs' type='email' placeholder='Insira seu e-mail'></input>
                <input className='txt-inputs' type='password' placeholder='Insira sua senhha'></input>
                <input className='txt-inputs' type='password' placeholder='Confirme sua senha'></input>

                <button id='btn-logar'>Entrar</button>
                <button id='btn-logar'>Cancelar</button>

            </div>
        </div>
    )
}