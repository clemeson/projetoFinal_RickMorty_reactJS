import React,{useState, useEffect} from 'react'
import api from '../../services/apiForum'
import {Link} from "react-router-dom";


function MenuFanfics(){

    return(
        <>
        
        <nav className="nav-forum">
            <li>
                <Link className="link" to="/fanfics/create">Criar</Link>
            </li>

            <li>
            <Link className="link" to="/fanfics/posts">Ver Fanfics</Link>
            </li>

            <li>
            <Link  className="link" to="/fanfics/doe">Doar</Link>
            </li>
        </nav>
        </>
    )


}


export default MenuFanfics