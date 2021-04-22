import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';
import CategoriaController from './app/controllers/CategoriaController';

const routes = new Router();

routes.post('/produto', ProdutoController.store);
routes.post('/categoria', CategoriaController.store);

export default routes;