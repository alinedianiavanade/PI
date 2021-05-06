import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            quantidade: Sequelize.STRING,
            descricao: Sequelize.STRING,
            assunto: Sequelize.STRING,
            preco: Sequelize.DECIMAL(7,2),
            id_categoria: Sequelize.INTEGER
        }, {
            sequelize,
            modelName: 'produtos'
        });

        Produto.associate = function(models){
            Produto.belongsTo(models.Categoria, {foreignKey: 'id_categoria', as: 'catProduto'})
        }

    }
}

export default Produto;