import Historico from '../models/Historico';
import Produto from '../models/Produtos';
import Pedido from '../models/Pedidos';
import Carrinho from '../models/Carrinho';

class HistoricoController {
    async store(request, response) {

        request.body.id_cliente = 1;

        const carrinho = await Carrinho.findOne({ where: { id_cliente: 1 } });

        request.body.valor_total = carrinho.valor_total;

        var pedidos = await Pedido.findAll({ where: { id_cliente: 1 } });

        var desc = [];
        var prods = [];
        for (var i = 0; i < pedidos.length; i++) {
            const produto = await Produto.findOne({ where: { id_produto: pedidos[i].id_produto } })
            desc.push(`Produto${i}: ${produto.nome}, quantidade: ${pedidos[i].quantidade}`)
            prods.push(produto.id_produto)

        }
        request.body.descricao = desc.toString();

        request.body.ids_produtos = prods.toString();

        const historico = await Historico.create(request.body)

        return response.json(historico)
    };
    async showHistoricoCliente(request, response) {
        if (!(await Historico.findOne({ where: { id_cliente: 1 } }))) {
            return response.status(401).json({ error: "Esse cliente não tem histórico cadastrado" })
        }

        const historicos = await Historico.findAll({ where: { id_cliente: 1 } })

        return response.json(historicos)
    }


}
export default new HistoricoController();