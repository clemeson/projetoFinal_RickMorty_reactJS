import React,{useState, useEffect} from 'react'
import {Route,Link} from "react-router-dom";
import './styles.css/style.css'
import './styles.css/responsive.css'
import api from '../../services/apiForum'
import MenuFanfics from './Menu'


function Create(){
    const [notes, setNotes] = useState('')
    const [title, setTitle] = useState('')

    const [apelido, setApelido] = useState(localStorage.getItem('apelido'))


    function setName(e){
        localStorage.setItem('apelido', e.target.value)

    }


    async function handleSubimit(e){
        e.preventDefault()

        const response =  api.post('/anotations/', {
            title,
            notes
        })

    }
    return(

        <div className="container-forum">

    

        <section className="section">


        <MenuFanfics></MenuFanfics>
            <div className="textarea">
                <form className="form-forum" onSubmit={handleSubimit}>
                   
                    <input required type="text" onChange={ e => setTitle(e.target.value)} className="insert-text-title" placeholder="Titulo da História"></input>
                    <textarea className="insert-text" value={notes} onChange={e => setNotes(e.target.value)} required>

                    </textarea>
                    
                    <button className="btn-send">Criar Fanfic</button>
                </form>
            </div>
        </section>
        </div>
      
    )
}

export default Create