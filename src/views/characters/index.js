import React, { useEffect, useState } from "react";
import CarouselComponent from '../../components/Carousel';
import ModalComponent from '../../components/Modal';
import api from "../../services/api";
import './style.css';
import LoadingComponent from "../../components/Loading";





    export default function Personagens() {



    const [character, setCharacter] = useState([])
    const [id, setId] = useState('')
    const [showModal, setShowModal] = useState('')
    const [loading, setLoading] = useState(false)
    const [persona, setPersona] = useState([])



    async function getApi() {

    
<<<<<<< HEAD
        let res = await api.get('/location/');
=======
        let res = await api.get('/character/');
>>>>>>> 0647c569f46e1ffc7de4b3a7c6cbeeffb10f6c07
        setLoading(false)
        
        let json = res.data.results

        setCharacter(json)
        
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            getApi()
        },1000)
       
    }, [])




    function handleImageId(imgID) {
        setId(imgID)



    }
    


    useEffect(() => {
        setShowModal(id)
    }, [id])




    function get(per){
        per.map((i,idx)=>{
            if(id == i.id){
                setPersona([i])
            }
        })
    }
    
    useEffect(()=>{
        get(character)
    }, [id])

    function EscolhaUmPersona(){
        return(
            <div className="container-welcome">
                <h1>Escolha um personagem, clikando na foto</h1>
            </div>


        )
    }

    return (
        <>
        
        {loading &&
        
            <LoadingComponent><h1 className="loading">Loading...</h1></LoadingComponent>


        }

        <EscolhaUmPersona></EscolhaUmPersona>

<<<<<<< HEAD
                <CarouselComponent imagens={character}   qtItems={5}  getId={handleImageId} />
=======
                <CarouselComponent imagens={character}   qtItems={4} getId={handleImageId} />
>>>>>>> 0647c569f46e1ffc7de4b3a7c6cbeeffb10f6c07
            <ModalComponent
             visible={showModal}
             setModal={setShowModal}
             Persona={persona}
             

            
            
            >
               
            
            </ModalComponent>
        </>
    )



}