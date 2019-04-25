const express = require ('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando a aplicação
const app = express();
//permitir o envio de dados no formato json
app.use(express.json());

// , basicAuth({
//     users:{
//         'admin': 'secret'
//     }
// })

//iniciando o db
mongoose.connect('mongodb://localhost:27017/fortsBrasil', {useNewUrlParser: true});

//especificando o diretorio de todos os modelos
requireDir('./src/models');


//rotas
app.use('/api', require('./src/routes'));

//especificando a porta que o servidor ira escutar
app.listen(3001);

