import Sequelize, { Model } from 'sequelize';

class Cliente extends Model {
    static init(sequelize) {
        super.init ({
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
            rua: Sequelize.STRING,
            cidade: Sequelize.STRING,
            cep: Sequelize.CHAR,
            estado: Sequelize.CHAR,
            cpf: Sequelize.CHAR,

        } , {
            sequelize,
        modelName:'Clientes',
        });
        Cliente.associate = function(models) {

            Cliente.hasMany(models.Pedido, {as: 'pedidos'});

    }
}

export default Cliente; 
