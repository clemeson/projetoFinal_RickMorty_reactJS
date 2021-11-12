import React,{useEffect, useState} from "react";
import styled from "styled-components";
import img from './404.jpg'




const divContainer = styled.div`


   color: white;

    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    padding-top: 50%;


`







function PageNotFound(){

       


    return(

            <div>

                <divContainer>
                    
                    <h1>ERRO 404</h1>
                    
                    
                    </divContainer>
                
            </div>


    )
}

export default PageNotFound;