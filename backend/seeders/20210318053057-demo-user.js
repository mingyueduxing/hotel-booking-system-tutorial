'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      username: 'admin',
      password: '$2b$10$S4vJISKu1emRjcGQIfYhteFdblMWCJ.gXgYayBlmNBsoENUuT46yu', //encoded password for 123456
      role: 'admin',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
