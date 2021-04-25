import Sequelize, { Model } from 'sequelize';

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            status: Sequelize.BOOLEAN,
            valor_total: Sequelize.DECIMAL(7,2),
            id_cliente: Sequelize.INTEGER
        }, {
            sequelize,
            modelName: 'Pedidos'
        });
        Pedido.associate = function(models){

            Pedido.belongsTo(models.Cliente, {foreignKey: 'id', as: 'pedcliente'})
        }
    }
}

export default Pedido;

