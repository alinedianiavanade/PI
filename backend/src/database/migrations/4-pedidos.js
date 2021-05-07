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
      status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      soma_produtos: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clientes',
          key: 'id'
        }
        
      },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produtos',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      });
  },

  down: (queryInterface) => {
     queryInterface.dropTable('pedidos');
  }
};
