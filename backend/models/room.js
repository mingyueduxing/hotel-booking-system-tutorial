'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Reservation, Image }) {
      // define association here
      this.hasMany(Reservation, { foreignKey: 'roomId'})
      this.hasMany(Image, { foreignKey: 'roomId', sourceKey: 'roomId'})
    }
  };
  Room.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    roomId: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });

  Room.beforeCreate(room => room.id = uuidv4())
  return Room;
};