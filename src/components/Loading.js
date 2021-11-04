import React from 'react'
import styled, {keyframes} from 'styled-components'

const rodando = keyframes`

0%{
    transform:rotate(0)
}
100%{
    transform: rotate(360deg);
}


`

export const Container = styled.div`

    height:100vh;
    width: 100vw;
    display: flex;

    align-items: center;
    justify-content: center;
    



`

const Loading = styled.div`

height: 70px;
width: 70px;

border-radius: 50%;
border:8px solid white;

border-left: 8px solid #74E452;

animation-name: ${rodando};
animation-duration: .4s;
animation-iteration-count: infinite;



`

 function LoadingComponent(){


    return(
        
        <Container>
            <Loading></Loading>
        </Container>

        )
}

export default LoadingComponent