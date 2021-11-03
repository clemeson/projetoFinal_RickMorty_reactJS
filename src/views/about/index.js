import React,{useState, useEffect} from 'react'
import api from '../../services/api'
import CarouselComponent from '../../components/Carousel'



  


function Sobre(){

    const [imagem, setImagem] = useState([])
     
       async function getImg(){
       let response = await api.get('/character/')
       let json = response.data.results
       setImagem(json)
    
    }

    useEffect(()=>{
        getImg()
    },[])


    return(


        <>
            <CarouselComponent imagens={imagem} qtItems={7}>

            </CarouselComponent>
        
        </>
    )
 
}

export default Sobre;
