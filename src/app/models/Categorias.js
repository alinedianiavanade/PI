import Sequelize, { Model } from 'sequelize';

class Categoria extends Model {
    static init(sequelize) {
        super.init({
            id_categoria: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                },
            categoria: Sequelize.STRING,
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