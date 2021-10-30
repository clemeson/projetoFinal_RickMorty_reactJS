import React, { useEffect, useState } from "react";
import ModalComponent from '../../components/Modal'
import api from '../../data/api';
import './Personagens.css'
import CarouselComponent from "../../components/Carousel";









function Personagens(){
  
const [imagem, setImagem] = useState([])


    async function getImg(){

      let result = await api.get('/character/');
      let json = result.data.results
        
        setImagem(json)
    }
    useEffect(()=>{
        getImg()
        
    },[])

    return (
        <div className="container-caroussel">
        <CarouselComponent imagens={imagem}>
         
        </CarouselComponent>
        </div>
    )
    
}
export default Personagens;