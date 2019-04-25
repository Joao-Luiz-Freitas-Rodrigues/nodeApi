const express = require( 'express');
const routes = express.Router();

const EstabelecimentoController = require('./controllers/EstabelecimentoController');

routes.get('/estabelecimentos',  EstabelecimentoController.index);
routes.get('/estabelecimentos/:id', EstabelecimentoController.show);
routes.post('/estabelecimentos', EstabelecimentoController.store);
routes.put('/estabelecimentos/:id', EstabelecimentoController.update);
routes.delete('/estabelecimentos/:id', EstabelecimentoController.destroy);





module.exports = routes;