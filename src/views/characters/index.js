import React, { useEffect, useState } from "react";
import CarouselComponent from '../../components/Carousel'
import ModalComponent from '../../components/Modal'
import api from "../../services/api";
import './style.css'






    export default function Personagens() {



    const [character, setCharacter] = useState([])



    async function getApi() {
        let res = await api.get('/character/');
        let json = res.data.results
        setCharacter(json)
    }

    useEffect(() => {
        getApi()
    }, [])

    const [id, setId] = useState('')


    function handleImageId(imgID) {
        setId(imgID)



    }
    
    const [showModal, setShowModal] = useState('')


    useEffect(() => {
        setShowModal(id)
    }, [id])

    const [persona, setPersona] = useState([])


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

    return (
        <>

            <CarouselComponent imagens={character} qtItems={5} getId={handleImageId} />
            <ModalComponent
             visible={showModal}
             setModal={setShowModal}
             Persona={persona}
             

            
            
            >
               
            
            </ModalComponent>
        </>
    )



}