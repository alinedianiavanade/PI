import { Router } from 'express';

import ClientesController from './app/controllers/ClientesController';

const routes = new Router();

routes.post('/clientes', ClientesController.store);
routes.put('/clientes/:id', ClientesController.update);
routes.delete('/clientes/:id', ClientesController.delete);
routes.get('/clientes', ClientesController.show);
routes.get('/clientes/:id', ClientesController.showClienteId);


export default routes;