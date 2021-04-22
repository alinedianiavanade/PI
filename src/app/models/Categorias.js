import Sequelize, { Model } from 'sequelize';

class Categoria extends Model {
    static init(sequelize) {
        super.init({
            idCategoria: Sequelize.INTEGER,
            nome: Sequelize.STRING,
        }, {
            sequelize,
            modelName: 'categorias'
        });
        Categoria.associate = function(models) {
            Categorias.hasMany(models.Produto, {as: 'produtos'});
        }
    }
}

export default Categoria;