import Produto from '../models/Produtos';

class ProdutoController {
    async store(request, response) {
        const produto = await Produto.create(request.body);

        return response.json(produto)
    }
    async showByCategory(request, response) {
        const produtos = await Produto.findAll({where:{id_categoria : request.params.id}});

        return response.json(produtos);
    }
}

export default new ProdutoController();