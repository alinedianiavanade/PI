import Pedido from '../models/Pedidos';
import Produto from '../models/Produtos';

class PedidoController {
    async store(request, response) {
        request.body.id_cliente = request.clienteId
        const produto = await Produto.findOne({where:{id:request.body.id_produto}})
        request.body.soma_produtos = request.body.quantidade * produto.preco
        const pedido = await Pedido.create(request.body);

        return response.json(pedido)
    };

    async show(request, response) {
        const pedidos = await Pedido.findAll();

        return response.json(pedidos);
    }
    async delete(request, response) {
        const {id} = request.params
        Pedido.destroy({where:{id_cliente: request.clienteId, id:id}})
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
    }
    async update(request, response) {
        const {id} = request.params
        const pedido = await Pedido.findOne({where: {id_cliente: request.clienteId, id:id}});

        if (!pedido) {
            return response.status(400).json({ error: "Esse pedido não existe"});
        };
        const pedidoFinal = await pedido.update(request.body);

        return response.json(pedidoFinal);
    };
    async showPedidoId(request, response) {
        const {id} = request.params
        const pedido = await Pedido.findOne({where: {id_cliente: request.clienteId, id:id}});

        if (!pedido) {
            return response.status(400).json({ error: "Esse pedido não existe"});
        };

        return response.json(pedido);
    }
    async showPedidoCliente(request, response) {
        const pedidoExists = await Pedido.findAll({where: {id_cliente : request.clienteId}});

        if (pedidoExists.length >= 1) {
            const pedidos = await Pedido.findAll({where: {id_cliente : request.clienteId}});

            return response.json(pedidos);         
        };
        return response.status(400).json({ error: "Cliente não tem pedidos"});
       
    }
    
};

export default new PedidoController();