'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedidos', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        },
      pedido: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      valor_total: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      /*id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Categorias',
          key: 'idCategorias'
        }
      },*/
      created_at: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      });
  },

  down: (queryInterface) => {
     queryInterface.dropTable('pedidos');
  }
};
