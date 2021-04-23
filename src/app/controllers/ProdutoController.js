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

    async show(request, response) {
        const produtos = await Produto.findAll();
        
        return response.json(produtos)
    };

    async showNome(request, response) {
        const produto = await Produto.findAll({where: {nome: request.body.nome}})

        return response.json(produto)
    }

    async delete(request, response) {
        const {id} = request.params;
        Produto.destroy({where:{id: id}});
        if(data=>data){
            return response.json({message:"Produto apagado."})
        }
    }
    
    async update(request, response) {
        const {id} = request.params
        const produto = await Produto.findByPk(id);
        const produtoFinal =  await produto.update(request.body);

        return response.json(produtoFinal)
    }
}

export default new ProdutoController();
