'use strict';
const {
  Model
} = require('sequelize');
const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Room }) {
      // define association here
      this.belongsTo(Room, { foreignKey: 'roomId'})
    }
  };
  Image.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    url: DataTypes.STRING,
    type: DataTypes.STRING,
    roomId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });

  Image.beforeCreate(image => image.id = uuidv4())
  return Image;
};