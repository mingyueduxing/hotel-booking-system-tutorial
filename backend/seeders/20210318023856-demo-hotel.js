'use strict';

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

    return queryInterface.bulkInsert('Hotels', [{
      id: '4d011908-8b5f-4ef1-ae7f-513d94655bff',
      name: 'Demo hotel',
      country: 'Australia',
      city: 'Sydney',
      street: '1 Barangaroo Ave',
      phone: '0488888888',
      email: 'info@hotel.com',
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
     await queryInterface.bulkDelete('Hotels', null, {});
  }
};
