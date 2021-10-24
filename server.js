 
 //importando framwork express
 const express = require('express');
 //pegando resolve do modulo path do node.
 const { resolve } = require('path')
 const app = express();

 //criando midlleware para observar o diretorio raiz, servir a pasta build.
 app.use('/', express.static(resolve(__dirname, './build')))

 app.listen(process.env.PORT || 3000, (err)=>{
    if(err){
        return console.log(err)
    }

    console.log('tudo ok')
 }  