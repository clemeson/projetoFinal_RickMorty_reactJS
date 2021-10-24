import React from "react";
import styled from 'styled-components'

const HeaderContainer = styled.header`
    display:flex;
    justify-content:center;
    align-items:center;

`

const Nav = styled.nav`

`

const Ul = styled.ul`
    display:flex;
    gap:2rem;

`



function Header(props) {



    return (
        
        <>
        <HeaderContainer>
            <Nav>
                <Ul>
                    <li>
                        <props.link to="/">Home</props.link>
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