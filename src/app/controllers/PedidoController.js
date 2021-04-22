import Pedido from '../models/Pedidos';

class PedidoController {
    async store(request, response) {
        const pedido = await Pedido.create(request.body);

        return response.json(pedido)
    }
}

export default new PedidoController();