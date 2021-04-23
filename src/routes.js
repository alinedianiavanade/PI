import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';
import CategoriaController from './app/controllers/CategoriaController';

const routes = new Router();

routes.post('/produto', ProdutoController.store);
routes.get('/produtos-na-categoria/:id', ProdutoController.showByCategory);

routes.post('/categoria', CategoriaController.store);
routes.put('/categoria/:id', CategoriaController.update);
routes.delete('/categoria/:id', CategoriaController.delete);
routes.get('/categoria', CategoriaController.show);
routes.get('/categoria/:id', CategoriaController.showCategoriaId);

export default routes;