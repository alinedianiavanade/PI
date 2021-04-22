import {Sequelize} from 'sequelize';
import {databaseConfig} from '../config/database';
import Produto from '../app/models/Produtos';

const models = [Produto];

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