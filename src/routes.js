import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';
import CategoriaController from './app/controllers/CategoriaController';
import PedidoController from './app/controllers/PedidoController';
import ClientesController from './app/controllers/ClienteController';
import CarrinhoController from './app/controllers/CarrinhoController';

const routes = new Router();

routes.post('/produto', ProdutoController.store);
routes.get('/produtos-na-categoria/:id', ProdutoController.showByCategory);

routes.post('/pedidos', PedidoController.store);
routes.get('/pedidos', PedidoController.show);
routes.delete('/pedidos/:id', PedidoController.delete);
routes.put('/pedidos/:id', PedidoController.update);
routes.get('/busca-pedidos/:id', PedidoController.showPedidoId);
routes.get('/pedidos-cliente/:id', PedidoController.showPedidoCliente);

routes.post('/clientes', ClientesController.store);
routes.put('/clientes/:id', ClientesController.update);
routes.delete('/clientes/:id', ClientesController.delete);
routes.get('/clientes', ClientesController.show);
routes.get('/clientes/:id', ClientesController.showClienteId);

routes.post('/categoria', CategoriaController.store);
routes.put('/categoria/:id', CategoriaController.update);
routes.delete('/categoria/:id', CategoriaController.delete);
routes.get('/categoria', CategoriaController.show);
routes.get('/categoria/:id', CategoriaController.showCategoriaId);

routes.post('/carrinho', CarrinhoController.store);
routes.put('/carrinho/:id', CarrinhoController.update);
routes.delete('/carrinho/:id_carrinho', CarrinhoController.delete);
routes.get('/carrinho', CarrinhoController.show);
routes.get('/carrinho/:id_carrinho', CarrinhoController.showCarrinhoId);

export default routes;