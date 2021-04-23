import { Router } from 'express';

import ClientesController from './app/controllers/ClientesController';

const routes = new Router();

routes.post('/clientes', ClientesController.store);

export default routes;