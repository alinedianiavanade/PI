import {Sequelize} from 'sequelize';

import Produto from '../app/models/Produtos';
import Categoria from '../app/models/Categorias';
import Pedido from '../app/models/Pedidos';
import Cliente from '../app/models/Clientes';
import Carrinho from '../app/models/Carrinho';
import Historico from '../app/models/Historico';
import databaseConfig from '../config/database';



const models = [Categoria, Produto, Cliente, Pedido, Carrinho, Historico];


class Database {
    constructor(){
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
