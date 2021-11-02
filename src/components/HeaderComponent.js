import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`

    display:absolute;
    height:70px;
    color:white;
    left:0;
    width:70%;


`

    const Nav = styled.nav`
        width:100%;
        display:flex:

    color:white;
    `

    const Ul = styled.ul`
        width:100%;
        display:flex:
        gap:1.2rem;

        
        
        li{
            font-size:1.2rem;
            display:flex;
            gap:1rem;
            list-style:none;
            justify-content: space-between;

        a{

        
            color:white;
            text-decoration:none;
        }
        }

`



function Header() {



    return (


        <HeaderContainer>
            <Nav>
                <Ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/character'}>Personagens</Link>
                        <Link to={'/location'}>Planetas</Link>
                        <Link to={'/about'}>Sobre</Link>
                        <Link to={'/quemsomos'}>Quem Somos</Link>
                    </li>

                </Ul>
            </Nav>
        </HeaderContainer>




    )
}

export default Header;