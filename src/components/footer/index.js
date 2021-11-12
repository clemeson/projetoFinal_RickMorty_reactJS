import React from "react";
import { Link } from "react-router-dom";
import "./style.css"


function Footer(){

    return(
        <>
        <footer id="fot">
             <p id="paragrafoFooter">© 2021 - Start- Recife | Rick And Morty | Quer conhecer nossos desenvolvedores? <Link id="linkk" to="/quem-somos">Clique Aqui</Link></p>
        </footer>
        </>
    )
}

export default Footer;