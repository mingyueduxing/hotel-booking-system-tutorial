'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Room }) {
      // define association here
      this.belongsTo(Room, { foreignKey: 'roomId', sourceKey: 'roomId'})
    }
  };
  Reservation.init({
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE,
    status: DataTypes.STRING,
    roomId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reservation',
  });
  return Reservation;
};