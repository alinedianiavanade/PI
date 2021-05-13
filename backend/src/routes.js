import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';
import CategoriaController from './app/controllers/CategoriaController';
import PedidoController from './app/controllers/PedidoController';
import ClientesController from './app/controllers/ClientesController';
import CarrinhoController from './app/controllers/CarrinhoController';
import SessionController from './app/controllers/SessionController';
import HistoricoController from './app/controllers/HistoricoController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/clientes', ClientesController.store);
routes.get('/clientes', ClientesController.show);

routes.post('/produto', ProdutoController.store);
routes.get('/produtos', ProdutoController.show);
routes.get('/produto-nome', ProdutoController.showByName);
routes.get('/produto/:id', ProdutoController.showProdutoId);
routes.get('/produto-assunto', ProdutoController.showBySubject);
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

routes.get('/pedidos', PedidoController.show);

routes.get('/carrinho', CarrinhoController.show);
routes.get('/carrinho/:id_carrinho', CarrinhoController.showCarrinhoId);

routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/cliente', ClientesController.update);
routes.delete('/clientes', ClientesController.delete);
routes.get('/cliente', ClientesController.showClienteId);

routes.get('/carrinho-cliente/:id_cliente', CarrinhoController.showCarrinhoIdCliente);
routes.delete('/carrinho', CarrinhoController.delete);
routes.put('/carrinho', CarrinhoController.update);
routes.post('/carrinho', CarrinhoController.store);

routes.get('/pedidos-cliente', PedidoController.showPedidoCliente);
routes.put('/pedidos/:id_pedido', PedidoController.update);
routes.get('/busca-pedidos/:id_pedido', PedidoController.showPedidoId);
routes.delete('/pedidos/:id_pedido', PedidoController.delete);
routes.post('/pedidos', PedidoController.store);
routes.delete('/pedidos-cliente', PedidoController.deleteByCliente);

routes.post('/historico', HistoricoController.store);
routes.get('/historico', HistoricoController.showHistoricoCliente);


export default routes;