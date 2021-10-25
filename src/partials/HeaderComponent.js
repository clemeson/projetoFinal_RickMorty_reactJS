import React from "react";
import styled from 'styled-components'

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



function Header(props) {



    return (
        
        <>
        <HeaderContainer>
            <Nav>
                <Ul>
                    <li>
                        <props.link to="/" style={{textDecoration: 'none'}}></props.link>
                    </li>
                    <li>
                        <props.link to="/personagens">Personagens</props.link>
                    </li>
                    <li>
                        <props.link to="/localizacao">Localização</props.link>
                    </li>
                    <li>
                        <props.link to="/sobre">Sobre</props.link>
                    </li>

                </Ul>
            </Nav>
            </HeaderContainer>
                </>



                )
}

                export default Header;