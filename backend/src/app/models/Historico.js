import Sequelize, { Model } from 'sequelize';

class Historico extends Model {
    static init(sequelize) {
        super.init({
            id_historico: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            id_cliente: Sequelize.INTEGER,
            valor_total: Sequelize.DECIMAL(10, 2),
            descricao: Sequelize.STRING,
            ids_produtos: Sequelize.STRING
        }, {
            sequelize,
            modelName: 'Historicos'
        });

        Historico.associate = function (models) {
            Historico.belongsToMany(models.Clientes, { as: 'Historicos' })
        }
    }
}
export default Historico;