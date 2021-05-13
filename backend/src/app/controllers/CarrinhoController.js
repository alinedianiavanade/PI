import Carrinho from "../models/Carrinho";
import Pedido from "../models/Pedidos";
import Produto from "../models/Produtos";
import HistoricoController from "../controllers/HistoricoController";

class CarrinhoController {
    async store(request, response) {

        const carExists = await Carrinho.findOne({ where: { id_cliente: request.clienteId } });

        if (carExists) {
            return response.status(400).json({ error: "Esse carrinho já existe" });
        };

        request.body.id_cliente = request.clienteId
        var pedidos = await Pedido.findAll({ where: { id_cliente: request.clienteId } });
        var total = 0
        var desc = [];
        for (var i = 0; i < pedidos.length; i++) {
            total = parseFloat(pedidos[i].soma_produtos) + parseFloat(total)

            const produto = await Produto.findOne({ where: { id_produto: pedidos[i].id_produto } })

            desc.push(`Produto${i}: ${produto.nome}, quantidade: ${pedidos[i].quantidade}`)

            request.body.quantidade = produto.quantidade - pedidos[i].quantidade
            await produto.update(request.body)

        }

        request.body.valor_total = total

        const carrinho = await Carrinho.create(request.body)

        const hist = await HistoricoController.store(request, response)

        return response.json(carrinho);
    };
    async update(request, response) {

        const carrinho = await Carrinho.findOne({ where: { id_cliente: request.clienteId } });
        if (!carrinho) {
            return response.status(404).json({ erroe: "Esse cliente ainda não possui um carrinho." })
        }
        const carrinhoFinal = await carrinho.update(request.body);

        return response.json(carrinhoFinal);
    }
    async delete(request, response) {
        Carrinho.destroy({ where: { id_cliente: request.clienteId } })
            .then(num => {
                if (num == 1) {
                    response.send({
                        message: "Carrinho apagado"
                    });
                } else {
                    response.send({
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
        const { id_carrinho } = request.params
        const carExists = await Carrinho.findByPk(id_carrinho);

        if (!carExists) {
            return response.status(400).json({ error: "Id do carrinho não existe" });
        };
        const carrinho = await Carrinho.findByPk(id_carrinho);

        return response.json(carrinho);
    }
    async showCarrinhoIdCliente(request, response) {
        const carrinho = await Carrinho.findOne({ where: { id_cliente: request.clienteId } });

        return response.json(carrinho);
    }

}
export default new CarrinhoController();