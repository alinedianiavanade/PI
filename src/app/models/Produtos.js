import {Sequelize, Model} from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            quantidade: Sequelize.STRING,
            descricao: Sequelize.STRING,
            preco: Sequelize.STRING,
            //idCategoria: Sequelize.INTEGER
        }, {
            sequelize,
        })
    }
}

export default Produto;