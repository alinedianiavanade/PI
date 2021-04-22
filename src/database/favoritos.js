/*import { Sequelize } from 'sequelize';
import  databaseConfig  from '../config/database';
import  User  from '../app/models/favoritos';

const models = [favoritos];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize (databaseConfig); // aqui eu tenho a conexão

        models.map( model => model.init(this.connection));
    }
}

export default  new Database();*/
