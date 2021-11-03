import React,{useEffect, useState} from "react";
import styled from "styled-components";
import api from '../../services/api';






function PageNotFound(){

        const [img, setImg] = useState([])

        async function getImg(){
        let response = await api.get('/character/1')
        let JSON = response.data.results

        console.log(JSON)
        setImg(JSON)
            
    }
    console.log(img)

    useEffect( function(){

        getImg()


        
    },[])





    return(

            <div>Pagina nao encontrada</div>


    )
}

export default PageNotFound;