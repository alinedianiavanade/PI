import Sequelize, { Model } from 'sequelize';

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            status: Sequelize.BOOLEAN,
            soma_produtos: Sequelize.DECIMAL(7,2),
            id_cliente: Sequelize.INTEGER,
            id_produto: Sequelize.INTEGER,
            quantidade: Sequelize.INTEGER
        }, {
            sequelize,
            modelName: 'Pedidos'
        });
        Pedido.associate = function(models){

            Pedido.belongsTo(models.Cliente, {foreignKey: 'id', as: 'pedcliente'})
            Pedido.hasMany(models.Produto, {foreignKey: 'id', as: 'prodPedido'})
        }
    }
}

export default Pedido;

