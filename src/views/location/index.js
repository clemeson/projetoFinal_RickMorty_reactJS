import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import CarouselComponent from '../../components/Carousel'
import './style.css'






function Location() {

    const [array, setArray] = useState([])
    const [url, setUrl] = useState('')
    const [type, setType] = useState('')
    const [jsontype, setJsontype] = useState([])
    const [vw, setVw] = useState(window.innerWidth)
    const [qtCard, setQtCard] = useState(2)

    async function getLocation() {
        let response = await api.get(`/location/`)
        let json = response.data.results

        setArray(json)

    }
 

    useEffect(() => {
        getLocation()
    }, [])
  


    //buscar filtrada na api por type
    async function getType(type) {

        let response = await api.get(`/location/?type=${type}`)
        let jsonType = response.data.results
        setJsontype(jsonType)


    }



    useEffect(() => {
        getType(type)
    }, [type])



    useEffect(()=>{
        {vw <= 400? setQtCard(1): setQtCard(3)}
    },[window])

    
    return (
        

        <div className="container">
            <div class="container-dimensoes">

                <form className="form">
                    <select className="typeselect" name="type" value={type} onChange={e => setType(e.target.value)}>
                        <option value="Planet"> Planet</option>
                        <option value="Cluster">Cluster</option>
                        <option value="Space station">Space station</option>
                        <option value="Microverse">Microverse</option>
                        <option value="Fantasy town">Fantasy town</option>
                        <option value="Resort">Resort</option>
                    </select>
                </form>
             
                    <CarouselComponent
                     imagens={jsontype}
                    qtItems={qtCard}

                     showFlechas={false}
                     text={true}
                     pagination={true}
            
                     >
                
                    </CarouselComponent>
              
            </div>
       
        
            </div>



      
    )

}

export default Location