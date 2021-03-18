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

    return queryInterface.bulkInsert('Images', [{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/slide-2.jpg',
      type: 'hotel',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/slide-2.jpg',
      type: 'hotel',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/slide-3.jpg',
      type: 'hotel',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_114824269-650x490.jpg',
      roomId: '101',
      type: 'room',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_114824263-650x490.jpg',
      roomId: '101',
      type: 'room',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_114824269-650x490.jpg',
      roomId: '102',
      type: 'room',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_114824263-650x490.jpg',
      roomId: '102',
      type: 'room',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_114824269-650x490.jpg',
      roomId: '103',
      type: 'room',
      createdAt: '2020-01-01',
      updatedAt: '2020-01-01'
    },{
      url: 'https://ld-wp.template-help.com/wordpress_61155_v1/wp-content/uploads/2016/11/shutterstock_114824263-650x490.jpg',
      roomId: '103',
      type: 'room',
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
    await queryInterface.bulkDelete('Images', null, {});
  }
};
