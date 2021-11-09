/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useEffect } from 'react'
import Carousel from 'react-elastic-carousel'
import styled,{keyframes} from 'styled-components'

const keyLine = keyframes`
0%{
    border-width: 2px solid #74E452;
    width: 1%;
    transition: all 0.5s ease-out
}

50%{
    border: 2px solid #74E452;
    width: 50%;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px #74E452 inset;

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
    border: 2px solid #D705F2;
    width: 50%;
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;

}
100%{
    border: 2px solid #D705F2;
    width: 90%;
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;
}
c

`
const Hr = styled.hr`
    
    animation-name: ${keyLine};
    animation-duration: 1.2s;
    animation-timing-function: ease;
    border: 2px solid #39FF14;
    box-shadow: 0px 0px 35px #74E452, 0px 0px 15px  inset;

    
    

`


const HrPurple = styled.hr`

    animation-name: ${keyLine2};
    animation-duration: 1.2s;
    border: 2px solid #D705F2;
    box-shadow: 0px 0px 35px #D705F2, 0px 0px 15px #D705F2 inset;


`

/**Component carroussel recebe o array capturado na requisição a API pela props e retorn o carroussel importando do modulo elastic para a pagina que chamou */


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
         showArrows={props.viewWidth ==1? true : false}
         pagination={props.viewWidth == 1? false : true}
  
         
        
        
         >
 
          {props.imagens.map((item, index)=>(   

                <div>
                    
                {props.text &&    
                <div className='card'>{item.name}<Hr/><HrPurple/><br/>{item.type}<Hr/><HrPurple/><br/>{item.dimension}<Hr/><HrPurple/></div>
                }   

               {item.image &&
              <img key={index} src={item.image}  onClick={(e)=>setHandleId(index +1)}/>
               }
            </div>
          ))}
          
        </Carousel>
        </>
    )
}


export default CarouselComponent



