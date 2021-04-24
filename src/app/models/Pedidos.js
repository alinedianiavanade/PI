import Sequelize, { Model } from 'sequelize';

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            status: Sequelize.BOOLEAN,
            valor_total: Sequelize.DECIMAL(7,2),
            id_cliente: Sequelize.INTEGER
        }, {
            sequelize,
        });
    }
}

export default Pedido;