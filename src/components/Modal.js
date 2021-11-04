import React,{useState} from "react";
import { useEffect } from "react/cjs/react.development";
import styled from 'styled-components'


const ModalBackground = styled.div`

    position:fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    z-index:90;
    background-color:rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;


`

  const ModalContent = styled.div`

    height:550px;
    width:450px;
    padding:30px 0 0 0;
  
    border-radius:5px;
    background-color: #1B0126;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px #74E452 inset;
    border: 10px solid #74E452;
    

    .container-content{
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
        border-radius:50%;
        width: 180px
    }
    h1{
        margin: 20px 0 10px 0;
    }

    h2{
        margin:0 0 20px 0;
    }

    }    


`

const Button = styled.button`



`

function ModalComponent(props){

    function hidenModal(){
        props.setModal('')
    }


    return(
        <>
        {props.visible >=1 &&
        <ModalBackground onClick={hidenModal}>
            <ModalContent>
               
                {props.Persona.map((i,idx)=>(
                    <div className="container-content">
                    <img key={idx} src={i.image} />
                    <h1 key={idx}>{i.name}</h1>
                    <h2 key={idx}>Especie - {i.species}</h2>
                    <h2 key={idx}>Status - {i.status}</h2>
                    <h2 key={idx}>Genero - {i.gender}</h2>
                   </div>
                ))}
                <Button>
                    Localização
                </Button>
            </ModalContent>
        </ModalBackground>
   
        }
        </>
    )

}


export default ModalComponent