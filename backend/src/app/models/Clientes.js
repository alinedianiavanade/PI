import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            id_cliente: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: Sequelize.STRING,
            email: Sequelize.STRING,
            senha: Sequelize.VIRTUAL,
            senha_hash: Sequelize.STRING,
            rua: Sequelize.STRING,
            cidade: Sequelize.STRING,
            cep: Sequelize.CHAR,
            estado: Sequelize.CHAR,
            cpf: Sequelize.CHAR,
        }, {
            sequelize,
            modelName: 'Clientes'
        });

        this.addHook('beforeSave', async (cliente) => {
            if (cliente.senha) {
                cliente.senha_hash = await bcrypt.hash(cliente.senha, 8);
            }
        });
        Cliente.associate = function (models) {

            Cliente.hasMany(models.Pedido, { as: 'pedidos' });
            Cliente.hasMany(models.Historico, { as: 'Historicos' });
        }
        return this;
    }
    checkFalsePassword(senha) {
        return bcrypt.compare(senha, this.senha_hash);
    }
}

export default Cliente;