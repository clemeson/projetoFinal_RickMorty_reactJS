
import React from 'react';
import styled, {keyframes} from 'styled-components';




const keyLine = keyframes`


0%{
    border-width: 2px solid #74E452;
    width: 1%;
    transition: all 0.5s ease-out
}



100%{
    border: 2px solid #74E452;
    width: 90%;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px #74E452 inset;
}

`


const keyLine2 = keyframes`
0%{
    border-width: 2px solid #D705F2;
    width: 1%;
    transition: all 0.5s ease-out
}
50%{
    
}

100%{
    border: 2px solid #D705F2;
    
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;
    @media(max-width: 720px){
        width: 70%;
    }
}


`
const Hr = styled.hr`
    width: 100%;
    margin-top: 5px;
    animation-name: ${keyLine};
    animation-duration: .5s;
    animation-timing-function: ease-in;
    border: 2px solid #39FF14;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px  inset;

    @media(max-width: 720px){
        width: 80%;
    }
    @media(max-width: 510px){
        width:60%;
    }
    

`


const HrPurple = styled.hr`
    width: 100%;
    
    animation-name: ${keyLine2};
    animation-duration: .5s;
    animation-timing-function: ease-in;
    border: 2px solid #D705F2;
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;

    @media(max-width: 720px){
        width:80%;
    }
    @media(max-width: 510px){
        width:60%;
    }

`

function LoadingBar(){
    
    return(
            <>
        <Hr></Hr>
        <HrPurple></HrPurple>
            </>
    )


}

export default LoadingBar