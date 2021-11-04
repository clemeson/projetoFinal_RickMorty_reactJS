import React,{useEffect, useState} from "react";
import styled from "styled-components";
<<<<<<< HEAD
import api from '../../services/api'; 
=======
import api from '../../services/api';
>>>>>>> 0647c569f46e1ffc7de4b3a7c6cbeeffb10f6c07






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


<<<<<<< HEAD

=======
    
>>>>>>> 0647c569f46e1ffc7de4b3a7c6cbeeffb10f6c07


    return(

<<<<<<< HEAD
            <div>Pagina nao encontrada</div>
=======
            <div></div>
>>>>>>> 0647c569f46e1ffc7de4b3a7c6cbeeffb10f6c07


    )
}

export default PageNotFound;