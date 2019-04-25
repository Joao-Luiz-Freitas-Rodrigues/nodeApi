const mongoose = require('mongoose');

const EstabelecimentoSchema = new mongoose.Schema({
   
   
    nome: {
        type: String,
        required: true,

    },
    endereco: {
        type: String,
        required: true
    },
    latitude:{
        type: Number,
        required: true
    },
    longitude:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,

    }
});

mongoose.model('Estabelecimento', EstabelecimentoSchema);