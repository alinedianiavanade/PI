import Sequelize, { Model } from 'sequelize';

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            pedido: Sequelize.STRING,
            data: Sequelize.STRING,
            status: Sequelize.BOOLEAN,
            valor_total: Sequelize.STRING,
           // id_cliente: Sequelize.INTEGER
        }, {
            sequelize,
        });
    }
}

export default Pedido;