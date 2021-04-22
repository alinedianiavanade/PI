import Categoria from '../models/Categorias';

class CategoriaController {
    async store(request, response) {
        const categoria = await Categoria.create(request.body);

        return response.json(categoria)
    }
}

export default new CategoriaController();