/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import styled from 'styled-components'
import LoadingBar from './LoadingBar'





/**Component carroussel recebe o array capturado na requisição a API pela props e retorn o carroussel importando do modulo elastic para a pagina que chamou */


function CarouselComponent(props){
 

    /*pega click da imagem, e retorn o id da imagem para o component pai*/

    const [handleId, setHandleId] = useState('')
    const [vw, setVw] = useState(window.innerWidth)
    const [card, setCard] = useState(5)
    //pega click e envia id da foto clickada para o arquivo que enviou a funcao na props
    useEffect(()=>{
        if(props.getId){
            (props.getId(handleId))
        }
    },[handleId])

    

    //tentando fazer condicionais de exibicao por tamanho da tela
 
    return(
        
      
        <>
        <Carousel
         itemsToShow={vw <= 400? 1 : 5}
         showArrows={props.viewWidth ==1? true : false}
         pagination={props.viewWidth == 1? false : true}
  
         
        
        
         >
 
          {props.imagens.map((item, index)=>(   

                <div>
                    
                {props.text &&    
                <div className='card'>{item.name}<br/><LoadingBar/>{item.type}<br/><LoadingBar/>{item.dimension}<LoadingBar/></div>
                }   

               {item.image &&
              <img  className='imgCarousel' key={index} src={item.image}  onClick={(e)=>setHandleId(index +1)}/>
               }
            </div>
          ))}
          
        </Carousel>
        </>
    )
}


export default CarouselComponent



