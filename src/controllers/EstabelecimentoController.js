const mongoose = require('mongoose');

const Estabelecimento = mongoose.model('Estabelecimento');

module.exports = {
    async index (req, res) {
        const estabelecimentos = await Estabelecimento.find(req.query);
       
        
         return res.json(estabelecimentos);
    },

    async show(req, res){
        // const est = await Estabelecimento.find(req.query);
        // console.log(res.json(est));
        const estabelecimento = await Estabelecimento.findById(req.params.id);

        return res.json( estabelecimento);
    },

    async store(req,res){
        //criação
        const estabelecimento = await Estabelecimento.create(req.body);

        return res.json(estabelecimento);

    },

    async update(req, res){
        const est = await Estabelecimento.find(req.query);
        console.log(res.json(est));
        

        const estabelecimento = await Estabelecimento.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(estabelecimento);
    },

    async destroy(req, res){
        await Estabelecimento.findByIdAndRemove(req.params.id);

        return res.send();
    }
}

