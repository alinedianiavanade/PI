import Produto from '../models/Produtos';

class ProdutoController {
    async store(request, response) {
        const produto = await Produto.create(request.body);

        return response.json(produto)
    }
}

export default new ProdutoController();