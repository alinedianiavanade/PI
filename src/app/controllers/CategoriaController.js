import Categoria from '../models/Categorias';

class CategoriaController {
    async store(request, response) {
        const catExists = await Categoria.findOne( { where: { categoria: request.body.categoria } } );

        if (catExists) {
            return response.status(400).json({ error: "Categoria já cadastrada"});
        };
        
        const {id_categoria, categoria} = await Categoria.create(request.body);


        return response.json({
            id_categoria,
            categoria,
        });
    };   

    async update(request, response) {
        const {id} = request.params
        const catExists = await Categoria.findByPk(id);

        if (!catExists) {
            return response.status(400).json({ error: "Categoria não existe"});
        };
        const categoria = await Categoria.findByPk(id);
        const categoriaFinal = await categoria.update(request.body);

        return response.json(categoriaFinal);
    }

    async delete(request, response) {
        const {id} = request.params
        Categoria.destroy({where:{id_categoria : id}})
        .then(num => {
            if (num == 1) {
                response.send({
                    message: "Categoria apagada com sucesso"
                });
            } else {
                response.send ({
                    message: "Ocorreu um erro ao apagar esta categoria, verifique os dados inseridos"
                });
            }
        })
        .catch(err => {
            response.status(500).send({
                message: "Erro interno ao apagar categoria, apague todos os produtos relacionados a ela primeiro"
            })
        })
        }
    

    async show(request, response) {
        const categorias = await Categoria.findAll();

        return response.json(categorias);
    }

    async showCategoriaId(request, response) {
        const {id} = request.params
        const catExists = await Categoria.findByPk(id);

        if (!catExists) {
            return response.status(400).json({ error: "Categoria não existe"});
        };
        const categoria = await Categoria.findByPk(id);

        return response.json(categoria);
    }
}

export default new CategoriaController();