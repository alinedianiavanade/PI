import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';
import PedidoController from './app/controllers/PedidoController';

const routes = new Router();

routes.post('/produto', ProdutoController.store);

routes.post('/pedidos', PedidoController.store);
routes.get('/pedidos', PedidoController.show);
routes.delete('/pedidos/:id', PedidoController.delete);
routes.put('/pedidos/:id', PedidoController.update);



export default routes;