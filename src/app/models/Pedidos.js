import Sequelize, { Model } from 'sequelize';

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            pedido: Sequelize.STRING,
           /* data: Sequelize.STRING,
            status: Sequelize.BOOLEAN,
            valorTotal: Sequelize.STRING,
           // id_cliente: Sequelize.INTEGER*/
        }, {
            sequelize, modelName: 'Pedidos',
        });
    }
}

export default Pedido;