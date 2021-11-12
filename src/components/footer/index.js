import React from "react";
import { Link } from "react-router-dom";


function Footer(){

    return(
        <>
        <footer>
             <p>© 2021 - Start- Recife | Rick And Morty | Todos os direitos reservados.</p>
             <p>Quer conhecer nossos desenvolvedores?</p> <Link to="/quem-somos">Clique Aqui</Link>
        </footer>
        </>
    )
}

export default Footer;