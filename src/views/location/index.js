import React,{ useState, useEffect} from "react";
import './style.css'
import api from '../../services/api'
import CarouselComponent from '../../components/Carousel'






function Location(){
    const [planetas, setPlanetas] = useState([])

    async function getPlanetas(){
        let res = await api.get('/location/')
        let json = res.data.results

        setPlanetas(json)
    }
    useEffect(()=>{
        getPlanetas()
    },[])
    

    return (
        <>
        {planetas.map((i, idx)=>(
            <h1 key={idx}>{i.name}</h1>
        ))}
        <div className="container">
            <h1>Location</h1>
        </div>
        </>
    )
}

export default Location;