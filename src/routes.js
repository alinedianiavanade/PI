import { Router } from 'express';
import ProdutoController from './app/controllers/ProdutoController';

const routes = new Router();

routes.post('/produto', ProdutoController.store);

export default routes;