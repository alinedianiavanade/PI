'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      preco: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      /*
      idCategoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          model: 'Categorias',
          key: 'idCategorias'
        }
      }
      */
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
     queryInterface.dropTable('produtos');
  }
};
