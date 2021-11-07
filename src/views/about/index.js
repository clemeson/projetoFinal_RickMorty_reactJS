import React,{useState, useEffect} from 'react'
import CarouselComponent from '../../components/Carousel';
import "./style/style.css"
import "./style/responsividade.css"
import "./style/carousel.css"
import api from '../../services/api'
import LoadingComponent from '../../components/Loading';


  


function Sobre(){

    const [imagem, setImagem] = useState([])
    const [loading, setLoading] = useState(false)
     
       async function getImg(){
       let response = await api.get('/character/')
       setLoading(false)
       let json = response.data.results
       setImagem(json)
    
    }

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            getImg()
        },1000)
    },[])


    return(


       <>
            {loading &&
        
        <LoadingComponent><h1 className="loading">Loading...</h1></LoadingComponent>


             }
       <main id="pai">
            <section id="pai2">
                <div id="text1">
                    <p>Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por <a href="https://pt.wikipedia.org/wiki/Justin_Roiland" target="_blank">Justin Roiland</a> e <a href="https://pt.wikipedia.org/wiki/Adult_Swim" target="_blank">Dan Harmon</a> para o bloco de programação noturno Adult Swim, exibido no canal Cartoon Network.</p>
                </div>
                    <figure> <img src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/05/legiao_Tx9kXPJq4Gw8.png.jpeg" alt=""></img> </figure>
            </section>


            <section id="pai3">
                    <figure> <img id="imagem2" src="https://i1.wp.com/cloud.estacaonerd.com/wp-content/uploads/2019/07/17091456/rick-and-morty-4-temp1.jpg?fit=3000%2C1688&ssl=1"></img> </figure>
                <div id="text2">
                    <p>
                    A série estreou em 2 de dezembro de 2013 e acompanha as perigosas aventuras do cientista alcoólatra Rick e seu neto Morty, que divide seu tempo entre a vida familiar e viagens interdimensionais.
                    </p>
                </div>
            </section>
            <div id="carousel">
                <CarouselComponent imagens={imagem} qtItems={5} />
            </div>
        </main>
       </>
    )
 
}

export default Sobre;
