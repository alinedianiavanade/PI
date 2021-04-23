import Cliente from '../models/Clientes';

class ClientesController {
    async store(request, response) {
        const cliente = await Cliente.create(request.body);

        return response.json(cliente)
    }
}

export default new ClientesController();

