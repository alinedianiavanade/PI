import {Sequelize} from 'sequelize';
import Produto from '../app/models/Produtos';
import Pedido from '../app/models/Pedidos';
import databaseConfig from '../config/database';


const models = [Produto, Pedido];

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