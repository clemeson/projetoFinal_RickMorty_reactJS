import React,{useState, useEffect} from 'react'
import api from '../../services/api'
import './style.css'




  


function Location(){

    const [residents, setResidents] = useState('')
    const [nome, setNome] = useState( localStorage.getItem('nome'))
     
       async function getImg(){
       let response = await api.get('/location/')
       let json = response.data.results

        setResidents(json)
    
    }

    console.log(nome)
    
    useEffect(()=>{
        getImg()
    },[])


    return(


        <>
        <div className='container'>
            
        </div>
        <input type="text" onChange={e=>setNome(e.target.value)} value={nome} ></input>
          
        
        </>
    )
 
}

export default Location;