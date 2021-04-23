import Pedido from '../models/Pedidos';

class PedidoController {
    async store(request, response) {
        const pedido = await Pedido.create(request.body);

        return response.json(pedido)
    };
    async show(request, response) {
        const pedidos = await Pedido.findAll();

        return response.json(pedidos);
    };
    async delete(request, response) {
        const {id} = request.params
        Pedido.destroy({where:{id : id}})
        .then(num => {
            if (num == 1) {
                response.send({
                    message: "Pedido apagado com sucesso"
                });
            } else {
                response.send ({
                    message: "Erro ao apagar este pedido"
                });
            }
        })
        .catch(err => {
            response.status(500).send({
                message: "Erro interno ao apagar o pedido"
            })
        })
    };
    async update(request, response) {
        const {id} = request.params
        const pedExists = await Pedido.findByPk(id);

        if (!pedExists) {
            return response.status(400).json({ error: "Esse pedido não existe"});
        };
        const pedido = await Pedido.findByPk(id);
        const pedidoFinal = await pedido.update(request.body);

        return response.json(pedidoFinal);
    };
    async showPedidoId(request, response) {
        const {id} = request.params
        const pedExists = await Pedido.findByPk(id);

        if (!pedExists) {
            return response.status(400).json({ error: "Pedido não existe"});
        };
        const pedido = await Pedido.findByPk(id);

        return response.json(pedido);
    }
    
}

export default new PedidoController();