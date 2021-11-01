import React from "react";
import Header from '../../components/HeaderComponent'

/*



    async function getApi(){
        let res = await api.get('/location/')
        let json = res.data
        setImagem(json)
        console.log(imagem)
    }

    useEffect(()=>{
        getApi()
    }, [])

*/


function Location(){
    
    return (
        <>
            <Header></Header>
            <h1>Location</h1>
        </>
    )
}

export default Location;