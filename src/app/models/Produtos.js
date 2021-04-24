import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            quantidade: Sequelize.STRING,
            descricao: Sequelize.STRING,
            preco: Sequelize.DECIMAL(7,2),
            //idCategoria: Sequelize.INTEGER
        }, {
            sequelize,
            modelName: 'produtos'
        });
/*
        Produto.associate = function(models){
            Produto.belongsTo(models.Categoria, {foreignKey: 'idCategoria', as: 'catProduto'})
        };
*/
    }
}

export default Produto;