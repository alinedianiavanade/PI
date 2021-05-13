import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            id_produto: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: Sequelize.STRING,
            quantidade: Sequelize.STRING,
            descricao: Sequelize.STRING,
            imgurl: Sequelize.STRING,
            preco: Sequelize.DECIMAL(7, 2),
            id_categoria: Sequelize.INTEGER
        }, {
            sequelize,
            modelName: 'produtos'
        });

        Produto.associate = function (models) {
            Produto.belongsTo(models.Categoria, { foreignKey: 'id_categoria', as: 'catProduto' })
            Produto.belongsToMany(models.Pedido, { foreignKey: 'id_pedido', as: 'prodPedido' })
        }

    }
}

export default Produto;