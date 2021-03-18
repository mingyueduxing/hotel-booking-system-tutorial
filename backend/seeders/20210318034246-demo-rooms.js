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

    return queryInterface.bulkInsert('Rooms', [{
      name: 'single room',
      roomId: '101',
      type: 'Single Room',
      price: '100',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      name: 'single room',
      roomId: '102',
      type: 'Single Room',
      price: '100',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      name: 'double room',
      roomId: '103',
      type: 'Double Room',
      price: '100',
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
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
