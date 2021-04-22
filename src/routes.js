import { response, Router } from 'express';
import Produto from './app/models/Produtos';

const routes = new Router();

routes.get('/', async (req,res) => {
    const produto = Produto.create({
        nome: 'Camisa Capitã Marvel',
        quantidade: '3',
        descrição: 'Camisa preta com simbolo da Capitã Marvel no centro, feita 100% de algodão.',
        preço: '49,90',
    })

    return res.json(produto);
})

export default routes;