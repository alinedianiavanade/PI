import Sequelize, { Model } from 'sequelize';

class Carrinho extends Model {
    static init(sequelize) {
        super.init({
            id_carrinho: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement:true,
                primaryKey: true,
            },
            id_cliente: Sequelize.INTEGER,
            id_produto: Sequelize.INTEGER,
            quantidade: Sequelize.INTEGER,
            id_pedido: Sequelize.INTEGER,
            soma_produtos: Sequelize.DECIMAL(10,2),
        },{
            sequelize,
            modelName:'carrinho'
        });

        Carrinho.associate = function (models) {
            Carrinho.hasMany(models.Clientes, {as:'Clientes'}),
            Carrinho.hasMany(models.Produtos, {as:'produtos'}),
            Carrinho.hasMany(models.Pedidos, {as:'pedidos'})
        }
    }
}
export default Carrinho;