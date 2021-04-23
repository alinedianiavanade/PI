import {Sequelize} from 'sequelize';
import Cliente from '../app/models/Clientes';

import databaseConfig from '../config/database';


const models = [Cliente];

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