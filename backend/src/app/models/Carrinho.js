import Sequelize, { Model } from 'sequelize';

class Carrinho extends Model {
    static init(sequelize) {
        super.init({
            id_carrinho: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_cliente: Sequelize.INTEGER,
            valor_total: Sequelize.DECIMAL(10, 2),
        }, {
            sequelize
        });

        Carrinho.associate = function (models) {
            Carrinho.hasMany(models.Clientes, { as: 'Clientes' })
        }
    }
}
export default Carrinho;