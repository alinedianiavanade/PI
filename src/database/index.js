import {Sequelize} from 'sequelize';
import Produto from '../app/models/Produtos';
import Categoria from '../app/models/Categorias';
import databaseConfig from '../config/database';


const models = [Categoria, Produto];

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