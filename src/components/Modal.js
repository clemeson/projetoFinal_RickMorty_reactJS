import React,{useState} from "react";
import { useEffect } from "react/cjs/react.development";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPortrait, FaRegClipboard } from "react-icons/fa";


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
  
    border-radius: 3px 3px 5px;
    background-color: #1B0126;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px #74E452 inset;
    border: 10px solid #39FF14;
    

    .container-content{
    display:flex;
    flex-direction:column;

    img{
        border-radius:50%;
        width: 200px;
    }
    h1{
        margin: 20px 0 10px 0;
    }

    h2{
        margin:0 0 20px 0;
    }
    h3{
        margin:0 0 20px 0;
    }

    }    



`

const ModalContentChild = styled.div`


    width: 300px;
    margin: 0 auto;


    img{
        margin: 0 auto;
    }


    .status{
        border-radius: 5px;
        text-align: center;
        padding: .2rem;

    }

    .containers-profile{
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-left: 20px;
    }

`

const divButton = styled.div`

    


`

const DivStatus = styled.div`
    display: flex;

`

function ModalComponent(props){

    const [color, setColor] = useState('')
    function hidenModal(){
        props.setModal('')
    }


    return(
        <>
        {props.visible >=1 &&
        <ModalBackground onClick={hidenModal}>
            <ModalContent>
               <ModalContentChild>
                {props.Persona.map((i,idx)=>(
                    <div className="container-content">
                    <img key={idx} src={i.image} />

                    <div className="containers-profile">
                        <h1 key={idx}>  <FaPortrait/>{i.name}</h1>
                    </div>
                  
                

                    <div className="containers-profile">
                
                    <h2 key={idx}> <FaRegClipboard/>{i.species} </h2>
                    <h2 className="status" key={idx} style={i.status.length == 5 ? {backgroundColor:'Green'} : {backgroundColor: 'Red'}}>        {i.status}</h2>
                    </div>
                    <div className="containers-profile">
                         
                    <h3> <FaMapMarkerAlt/>{i.location.name}</h3>

                    </div>
               
              
              
                    <divButton>
                   <li>
                       <Link to="/character/location">
                           Localização
                       </Link>
                   </li>
               </divButton>
                   </div>
                ))}
             </ModalContentChild>
            </ModalContent>
        </ModalBackground>
   
        }
        </>
    )

}


export default ModalComponent