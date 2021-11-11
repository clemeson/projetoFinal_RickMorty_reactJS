import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styled,{keyframes} from 'styled-components'
import { Link } from "react-router-dom";
import LoadBar from './LoadingBar';







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
    width: 400px;
    
  @media(max-width: 720px) {
        width: 320px;
        height: 480px;
       .containers-profile h1,{
            font-size: 20px;
       }
       .containers-profile h2{
            font-size: 18px;
       }
       .containers-profile h3{
            font-size: 16px;
       }

       

     
     
  }

  @media(max-width: 510px){
    width: 290px;
    height: 450px;
    .containers-profile h3{
            font-size: 14px;
       }
       .containers-profile h1{
            font-size: 24px;
       }

  }

  @media(max-width: 380px){
      height: 400px;


    .container-content{
        width: 280px;
    }
  }

    
  
    border-radius: 3px 3px 5px;
    background-color: #1B0126;
    border: 8px solid #39FF14;
    box-shadow: 0px 0px 35px #39FF14, 0px 0px 15px #D705F2 inset;
    

    .container-content{
        margin: 0 auto;
        width: 300px;
    height: 500px;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding: 40px 0 0 0;
    @media(max-width: 510px){
        width: 280px;
    }

    img{
        margin-bottom: 10px;
        border-radius:50%;
        width: 200px;
        border: 3px solid #D705F2;
        box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;
        
     

            @media(max-width: 720px){
            width:170px;
    }
            @media(max-width: 510px){
                width:150px;
            }

            
        @media(max-width: 380px){
                width: 120px;
                
            }
    }
      

 

    }    
 


`
const ModalContentChild = styled.div`


       
        margin: 0 auto;
        display: flex;
        flex-direction: column;


    img{
       
    }




    


    .status{
        border-radius: 5px;
        text-align: center;
        padding: .2rem;

    }

    .containers-profile,h3{
        display: flex;
        align-items: center;
        font-size: 18px;
        gap: 1rem;  
    

    }
    .containers-profile{
    margin-bottom : 5px;
    margin-top : 5px;
    }

    
    }
   
`



const DivStatus = styled.div`
    display: flex;

`

function ModalComponent(props) {

    const [color, setColor] = useState('')
    function hidenModal() {
        props.setModal('')
    }


    return (
        <>
            {props.visible >= 1 &&
                <ModalBackground onClick={hidenModal}>
                    <ModalContent>
                        <ModalContentChild>
                            {props.Persona.map((i, idx) => (
                                <div className="container-content">
                                    <img className="img-profile" key={idx} src={i.image} />

                                    <div className="containers-profile">
                                        <h1 key={idx}> {i.name}   </h1>
                                    </div>



                                    <div className="containers-profile">

                                        <h2 key={idx}>Status</h2>
                                        <h2 className="status" key={idx} style={i.status.length == 5 ? { backgroundColor: 'Green' } : { backgroundColor: 'Red' }}>  {i.status}</h2>
                                    </div>
                                    <div className="containers-profile">
                                    <h2>Espécie</h2>
                                    <div>-</div>
                                    <h2>{i.species}</h2>
                                        
                                        </div>
                                    <LoadBar time={.5}/>
                                        <div className="containers-profile">

                                          <h3>{i.location.name}</h3>

                                         </div>
                                    <LoadBar time={.5}/>



                              
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