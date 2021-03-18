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
    return queryInterface.bulkInsert('Reservations', [{
      firstname: 'foo',
      lastname: 'bar',
      roomId: '101',
      checkin: '2020-01-02',
      checkout: '2020-01-03',
      status: 'booked',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-02'
    },{
      firstname: 'foo',
      lastname: 'bar',
      roomId: '102',
      checkin: '2020-01-02',
      checkout: '2020-01-03',
      status: 'booked',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-02'
    },{
      firstname: 'foo',
      lastname: 'bar',
      roomId: '103',
      checkin: '2020-01-02',
      checkout: '2020-01-03',
      status: 'booked',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-02'
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Reservations', null, {});
  }
};
