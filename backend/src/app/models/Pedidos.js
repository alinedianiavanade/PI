import Sequelize, { Model } from 'sequelize';

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            id_pedido: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            status: Sequelize.BOOLEAN,
            soma_produtos: Sequelize.DECIMAL(7, 2),
            id_cliente: Sequelize.INTEGER,
            id_produto: Sequelize.INTEGER,
            quantidade: Sequelize.INTEGER,
            imgurl_produto: Sequelize.STRING,
            preco_produto: Sequelize.DECIMAL(7, 2),
            nome_produto: Sequelize.STRING,
            quantidade_produto: Sequelize.INTEGER
        }, {
            sequelize,
            modelName: 'Pedidos'
        });
        Pedido.associate = function (models) {

            Pedido.belongsTo(models.Cliente, { foreignKey: 'id_cliente', as: 'pedcliente' })
            Pedido.hasMany(models.Produto, { foreignKey: 'id_produto', as: 'prodPedido' })
        }
    }
}

export default Pedido;