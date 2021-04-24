import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';

import PedidoController from './app/controllers/PedidoController';

import CategoriaController from './app/controllers/CategoriaController';


const routes = new Router();

routes.post('/produto', ProdutoController.store);
routes.get('/produtos-na-categoria/:id', ProdutoController.showByCategory);

routes.post('/categoria', CategoriaController.store);
routes.put('/categoria/:id', CategoriaController.update);
routes.delete('/categoria/:id', CategoriaController.delete);
routes.get('/categoria', CategoriaController.show);
routes.get('/categoria/:id', CategoriaController.showCategoriaId);

routes.post('/pedidos', PedidoController.store);
routes.get('/pedidos', PedidoController.show);
routes.delete('/pedidos/:id', PedidoController.delete);
routes.put('/pedidos/:id', PedidoController.update);
routes.get('/busca-pedidos/:id', PedidoController.showPedidoId);
routes.get('/pedidos-cliente/:id', PedidoController.showPedidoCliente);



export default routes;