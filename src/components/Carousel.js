import React, { useState,useEffect } from 'react'
import Carousel from 'react-elastic-carousel'

/**Component carroussel recebe o array capturado na requisição a api pela props e retorn o carroussel importando do modulo elastic para a pagina que chamou */


function CarouselComponent(props){

    /*pega click da imagem, e retorn o id da imagem para o component pai*/

    const [handleId, setHandleId] = useState('')

    useEffect(()=>{
        if(props.getId){
            (props.getId(handleId))
        }
    },[handleId])
    
    return(
        
      
        <>
        <Carousel
         itemsToShow={props.qtItems}
         
        
        
         >
            
          {props.imagens.map((item, index)=>(   
              <img key={index} src={item.image}  onClick={(e)=>setHandleId(index +1)}/>
            
        
          ))}
        </Carousel>

        </>
    )
}


export default CarouselComponent



