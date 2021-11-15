import React,{useState, useEffect} from 'react';
import api from '../../services/apiForum'
import MenuFanfics from './Menu'
import CarouselComponent from '../../components/Carousel';





    function GetAllPosts(){

    const [allposts, setAllPosts] = useState([])
    const [id, setId] = useState('')
    const [post, setPost] = useState([])


        async function getAllPosts(){
            const response = await api.get('/anotations/')
            console.log(response.data)
            setAllPosts(response.data)
        }
    
        useEffect(() => {
            getAllPosts()
        },[])
        
        function getPost(posts){
            posts.map((i)=>{
                if(id == i._id){
                    setPost([i])
                }
            })
        }


        useEffect(() => {
            getPost(allposts)

        },[id])
    


   
    
    return(

        <>
       <div className="container-forum">
        
    

        <section className="section">


        <MenuFanfics></MenuFanfics>
        
        <main className="main-fanfics">
        <sidebar className="sidebar-fanfics">
        {allposts.map((i)=>(
                <>
                <p className="mural-seide" onClick={ e => setId(i._id)}> {i.title} </p>
               
                </>
            ))}
        </sidebar>
        <div className="container-posts">
            
            {post.map((i)=>(
                <>
                <p>{i.title}  </p>
                <p> {i.notes} </p>
                </>
            ))}
            
        

        </div>
        </main>
        </section>
         </div>
        </>

    )
}


export default GetAllPosts