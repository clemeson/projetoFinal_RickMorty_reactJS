import React from "react"
import './style.css'
import imagem  from './portall.gif';
import rick from './and.gif'
import morty from './morty.gif';
import avo from './avo.png'
import familia from './familia.png'
import planetas from './planetas.png'
import netflix from './netflix.png'
import hbo from './hbo.png'
import ty from './ty.png'
import nave from './nave.png'



function Home(){


    return (

        <div className="pai">
        
                    <h1 className="nome1">Você está preste a</h1>
                    <h2 className="nome2">Começar uma viagem que vai </h2>
                    <h3 className="nome3"> Mudar a sua Vida</h3>
                
            <img className="img" src={imagem} alt=""/> 
            <img className="img2" src={rick} alt=""/>
            <img className="img3" src={morty} alt=""/>


                <div className="Text">
                    <h1 className="text1"> Personagem,Planetas e Muitos Mais.</h1>
                    <h4 className="text2" >Pronto Para Se Aventurar?</h4>
                    <img className="text3" src={ty} alt="" />
                    <img className="text4" src={nave} alt="" />
                
              </div>
              <imput className="bot" type="texto">  </imput>    
            <div className="part2 "> 
                <h1> Aproveite no seu computador,Celular ou tablet</h1>
                <h3> Desbrave Nesse Mar de Conhecimentos</h3> 
                <p className="sobre"> 
                A série se originou de uma paródia animada em curta-metragem do filme De Volta 
                Para o Futuro criada por Roiland para o festival de cinema Channel 101. 
                A Adult Swim abordou Harmon a respeito de ideias para um programa de televisão, 
                então ele e Roiland desenvolveram o programa com base no curta, 
                substituindo os personagens de Doc com Rick e Marty com Morty.</p>

                <img className="avo"  src={avo} alt="" />
            </div>

            <div  className="part3">
               <h1> Acompanhe Seus Personagens Favoritos</h1>
               <p className="sobre1"> Mesmo apresentando rostos inusitados a cada semana, Rick and Morty é focado nos dois protagonistas
                  (como o nome deixa claro), e também na família deles. 
                   Rick é um cientista brilhante e um inventor altamente habilidoso, mas perdido na bebida e desilusão. 
                   Já Morty é um garoto comum, talvez até meio lerdo para a idade dele, 
                   que se vê sempre arrastado para as confusões do avô. 
                   Ambos são interpretados por Justin Roiland no inglês.
                   Além deles, outros personagens recorrentes são Summer (Spencer Grammer), a irmã patricinha de Morty; Beth (Sarah Chalke), filha de Rick e mãe de Morty; e Jerry (Chris Parnell), 
                   o desajeitado pai de Morty – 
                   para a infelicidade de Rick, que não vai muito com a cara do genro. </p>
                <img className="img4" src={familia} alt="" />
            </div>

            <div className="part4">
                <h1>Vamos Embarcar Nessa Viagem Espacial?</h1> 
                <p className="sobre4" > Um dos elementos mais importantes de Rick and Morty são os locais malucos que os protagonistas visitam,
                    entretanto, os planetas em que essas aventuras acontecem nem sempre são celebrados. 
                    Embora a maioria dos melhores episódios aconteçam na Terra,
                    também há muito que falar dos demais planetas que aparecem na história.</p>
                    
                <img className="imgg4"  src={planetas} alt="" />
                
            </div>


            <div className="part5">
                <h1> Onde assistir Rick and Morty? </h1>
                <p className="sobre 5"> Atualmente, é possível encontrar Rick and Morty em dois serviços de streaming.
                    As quatro primeiras temporadas da animação estão disponíveis no catálogo da Netflix. 
                    Já a HBO Max, que é da mesma dona do Adult Swim, tem os quatro primeiros anos e também
                    a recém-lançada quinta temporada, exclusiva da plataforma. Em ambos os serviços,
                    a série acompanha também a elogiada dublagem em português do Brasil.</p>

                    <img className="imggg6" src={hbo} alt="" />
                    <img className="imggg5" src={netflix} alt="" />
            </div>
        </div>

    
    )
}

export default Home;