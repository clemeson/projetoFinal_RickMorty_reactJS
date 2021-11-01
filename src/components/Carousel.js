import React from 'react'
import Carousel from 'react-elastic-carousel'

/**Component carroussel recebe o array capturado na requisição a api pela props e retorn o carroussel importando do modulo elastic para a pagina que chamou */
function CarouselComponent(props){



    return(
        <Carousel itemsToShow={4} >
          {props.imagens.map((item, index)=>(   
              <img key={index} src={item.image} />
          ))}
        </Carousel>
    )
}


export default CarouselComponent



