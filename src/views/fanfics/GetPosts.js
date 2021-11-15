import React,{useState, useEffect} from 'react';
import api from '../../services/apiForum'
import MenuFanfics from './Menu'




function GetAllPosts(){

    const [allposts, setAllPosts] = useState([])

 

        async function getAllPosts(){
            const response = await api.get('/anotations/')
            console.log(response.data)
            setAllPosts(response.data)
        }
        

        useEffect(() => {
            getAllPosts()
        },[])
        
   
    console.log(allposts)
    return(

        <>
       <div className="container-forum">

    

        <section className="section">


        <MenuFanfics></MenuFanfics>
        
        <div className="container-posts">

       {allposts.map((i)=>(
           <>
           <div> {i.title} </div>
         <div> {i.notes} </div>
         <div> {i._id} </div>
         </>
       ))}

        </div>
        </section>
         </div>
        </>

    )
}


export default GetAllPosts