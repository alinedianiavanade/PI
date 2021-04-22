import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';

const routes = new Router();

routes.post('/produto', ProdutoController.store);
routes.get('/produtos', ProdutoController.show);
routes.get('/produto', ProdutoController.showNome);
routes.delete('/produto/:id', ProdutoController.delete);
routes.put('/produto/:id', ProdutoController.update);

export default routes;