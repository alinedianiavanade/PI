import * as Yup from 'yup';
import Produto from '../models/Produtos';
import Categoria from '../models/Categorias';
const { Op } = require("sequelize");

class ProdutoController {
    async store(request, response) {
        const schema = Yup.object().shape({
            nome: Yup.string().required(),
            quantidade: Yup.number().required(),
            descricao: Yup.string(),
            imgurl: Yup.string(),
            preco: Yup.number().required(),
            id_categoria: Yup.number().required()
        })
        if (!(await schema.isValid(request.body))) {
            return response.status(401).json({ error: 'Dados inválidos.' });
        };

        if (!(await Categoria.findOne({ where: { id_categoria: request.body.id_categoria } }))) {
            return response.status(401).json({ error: 'Por favor cadastre uma categoria existente' })
        }

        const produtoExiste = await Produto.findOne({ where: { nome: request.body.nome } })

        if (produtoExiste) {
            return response.status(401).json({ error: 'Produto já cadastrado.' });
        }

        const produto = await Produto.create(request.body);

        return response.json(produto)
    };

    async show(request, response) {
        const produtos = await Produto.findAll();

        return response.json(produtos)
    };

    async showByName(request, response) {
        const nome = request.query.nome;

        Produto.findAll({ where: { nome: { [Op.like]: `%${nome}%` } } })
            .then(data => {
                response.send(data);
            })
            .catch(err => {
                response.status(500).send({
                    message:
                        err.message || "Erro ao procurar produto"
                });
            });
    };

    async showBySubject(request, response) {
        const produto = await Produto.findAll({ where: { assunto: request.body.assunto } })

        if (!(await Produto.findOne({ where: { assunto: request.body.assunto } }))) {
            return response.status(401).json({ error: `Nenhum produto do assunto ${request.body.assunto} foi encontrado.` })
        }

        return response.json(produto)
    };

    async delete(request, response) {
        const { id } = request.params;

        if (!(await Produto.findByPk(id))) {
            return response.status(401).json({ error: 'Produto não encontrado.' })
        }

        Produto.destroy({ where: { id_produto: id } });
        if (data => data) {
            return response.json({ message: `Produto de id ${id} foi deletado com sucesso.` })
        }
    };

    async deleteAll(request, response) {
        Produto.destroy({ where: {}, truncate: false })
            .then(nums => {
                response.send({ message: `${nums} produtos apagados com sucesso.` })
                    .catch(error => {
                        response.status(500).send({ error: "Erro de servidor ao tentar apagar os produtos." })
                    })
            })
    };

    async deleteAllByCategory(request, response) {
        const { id } = request.params

        if (!(await Produto.findOne({ where: { id_categoria: id } }))) {
            return response.status(401).json({ error: 'Nenhum produto foi encontrado para essa categoria ou não existe nenhuma categoria com esse id.' })
        }
        Produto.destroy({ where: { id_categoria: id }, truncate: false })
            .then(nums => {
                response.send({ message: `${nums} produtos da categoria de id ${id} apagados com sucesso.` })
                    .catch(error => {
                        response.status(500).send({ error: "Erro de servidor ao tentar apagar os produtos dessa categoria." })
                    })
            })
    };


    async update(request, response) {
        const schema = Yup.object().shape({
            nome: Yup.string(),
            quantidade: Yup.number(),
            descricao: Yup.string(),
            imgurl: Yup.string(),
            assunto: Yup.string(),
            preco: Yup.number()
        })
        if (!(await schema.isValid(request.body))) {
            return response.status(401).json({ error: 'Dados inválidos.' });
        };

        const { id } = request.params
        const produto = await Produto.findByPk(id);

        if (!produto) {
            return response.status(401).json({ error: 'Produto não encontrado.' });
        }

        const produtoFinal = await produto.update(request.body);

        return response.json(produtoFinal)
    }

    async showByCategory(request, response) {

        const { id } = request.params

        if (!(await Produto.findOne({ where: { id_categoria: id } }))) {
            return response.status(401).json({ error: 'Nenhum produto foi encontrado para essa categoria.' })
        }

        const produtos = await Produto.findAll({ where: { id_categoria: id } });

        return response.json(produtos);
    }
    async showProdutoId(request, response) {
        const { id } = request.params
        const produtoExists = await Produto.findByPk(id);

        if (!produtoExists) {
            return response.status(400).json({ error: "Cadastro não existe" });
        };
        const produto = await Produto.findByPk(id);

        return response.json(produto);
    }
}

export default new ProdutoController();