import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';
import ClientesController from './app/controllers/ClientesController';
import PedidoController from './app/controllers/PedidoController';
import CategoriaController from './app/controllers/CategoriaController';

const routes = new Router();

routes.post('/clientes', ClientesController.store);
routes.put('/clientes/:id', ClientesController.update);
routes.delete('/clientes/:id', ClientesController.delete);
routes.get('/clientes', ClientesController.show);
routes.get('/clientes/:id', ClientesController.showClienteId);

routes.post('/produto', ProdutoController.store);
routes.get('/produtos', ProdutoController.show);
routes.get('/produto', ProdutoController.showByName);
routes.delete('/produto/:id', ProdutoController.delete);
routes.delete('/produtos', ProdutoController.deleteAll);
routes.delete('/produtos-categoria/:id', ProdutoController.deleteAllByCategory);
routes.put('/produto/:id', ProdutoController.update);
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
