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

    
        let res = await api.get('/character/');
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

                <CarouselComponent imagens={character}   qtItems={4} getId={handleImageId} />
            <ModalComponent
             visible={showModal}
             setModal={setShowModal}
             Persona={persona}
             

            
            
            >
               
            
            </ModalComponent>
        </>
    )



}