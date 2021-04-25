'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('carrinho', { 
      id_carrinho: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        },
      id_produto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'produtos',
          key: 'id'
        }
      },
      id_pedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Pedidos',
          key: 'id'
        }
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Clientes',
          key: 'id'
        }
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }, 
      soma_produtos: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
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
     queryInterface.dropTable('carrinho');
  }
};
