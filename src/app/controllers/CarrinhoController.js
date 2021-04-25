import Carrinho from "../models/Carrinho";

class CarrinhoController {
    async store(request, response) {
        const carExists = await Carrinho.findOne( { where: { carrinho: request.body.carrinho } } );

        if (carExists) {
            return response.status(400).json({ error: "Esse carrinho já existe"});
        };
        
        const {id_carrinho, id_produto, quantidade,id_pedido,soma_produtos} = await Carrinho.create(request.body);


        return response.json({
            id_carrinho,
            id_produto,
            quantidade,
            id_pedido,
            soma_produtos
        });
    };   
    async update(request, response) {
        const {id_carrinho} = request.params
        const carExists = await Carrinho.findByPk(id_carrinho);

        if (!carExists) {
            return response.status(400).json({ error: "Não existe carrinho com esse id"});
        };
        const carrinho = await Carrinho.findByPk(id_carrinho);
        const carrinhoFinal = await carrinho.update(request.body);

        return response.json(carrinhoFinal);
    }
    async delete(request, response) {
        const {id_carrinho} = request.params
        Carrinho.destroy({where:{id_carrinho : id_carrinho}})
        .then(num => {
            if (num == 1) {
                response.send({
                    message: "Carrinho apagado"
                });
            } else {
                response.send ({
                    message: "Não foi possível apagar o carrinho"
                });
            }
        })
        .catch(err => {
            response.status(500).send({
                message: "Erro interno ao apagar o carrinho"
            })
        })
        }

        async show(request, response) {
            const carrinho = await Carrinho.findAll();
    
            return response.json(carrinho);
        }

        async showCarrinhoId(request, response) {
            const {id_carrinho} = request.params
            const carExists = await Carrinho.findByPk(id_carrinho);
    
            if (!carExists) {
                return response.status(400).json({ error: "Id do carrinho não existe"});
            };
            const carrinho = await Carrinho.findByPk(id_carrinho);
    
            return response.json(carrinho);
        }
    
}
 export default new CarrinhoController();