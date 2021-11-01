import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
    display:flex;
    height:100px;
    color:white;


`

const Nav = styled.nav`


color:white;
`

const Ul = styled.ul`
    display:flex;
    gap:2rem;

    
    
    li{


      list-style:none;

      a{

     
          color:#090311;
          text-decoration:none;
      }
    }

`



function Header() {



    return (
        
        <>
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
                </>



                )
}

export default Header;