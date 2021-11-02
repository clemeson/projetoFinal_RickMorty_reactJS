import React,{useState, useEffect} from 'react'
import CarouselComponent from '../../components/Carousel';
import api from '../../services/api'



   


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
       <CarouselComponent imagens={imagem} qtItems={5} />
       </>
    )
}

export default Sobre;
