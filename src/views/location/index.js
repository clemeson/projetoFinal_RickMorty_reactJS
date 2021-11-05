import React,{useState, useEffect} from 'react'
import api from '../../services/api'
import './style.css'
import CarouselComponent from '../../components/Carousel'



  


function Location(){

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
        <div className='container'>

        </div>
            <CarouselComponent imagens={imagem} qtItems={7}>

            </CarouselComponent>
        
        </>
    )
 
}

export default Location;