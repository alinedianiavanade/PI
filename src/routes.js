import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';

const routes = new Router();

routes.post('/produto', ProdutoController.store);
routes.get('/produtos', ProdutoController.show);
routes.get('/produto', ProdutoController.showByName);
routes.delete('/produto/:id', ProdutoController.delete);
routes.delete('/produtos', ProdutoController.deleteAll);
routes.delete('/produtos-categoria/:id', ProdutoController.deleteAllByCategory);
routes.put('/produto/:id', ProdutoController.update);
routes.get('/produtos-na-categoria/:id', ProdutoController.showByCategory);

export default routes;
