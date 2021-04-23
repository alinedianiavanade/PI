import Pedido from '../models/Pedidos';

class PedidoController {
    async store(request, response) {
        const catExists = await Pedido.findOne( { where: { pedido: request.body.pedido } } );

        if (catExists) {
            return response.status(400).json({ error: "Pedido já cadastrado"});
        };
        
        const {id, pedido} = await Pedido.create(request.body);


        return response.json({
            id,
            pedido,
        });
    };   
    async show(request, response) {
        const pedidos = await Pedido.findAll();

        return response.json(pedidos);
    }
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
    }
    async update(request, response) {
        const {id} = request.params
        const catExists = await Pedido.findByPk(id);

        if (!catExists) {
            return response.status(400).json({ error: "Esse pedido não existe"});
        };
        const pedido = await Pedido.findByPk(id);
        const pedidoFinal = await pedido.update(request.body);

        return response.json(pedidoFinal);
    }
    
}

export default new PedidoController();