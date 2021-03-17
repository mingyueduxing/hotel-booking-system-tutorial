const { DataTypes } = require('sequelize')
const sequelize = require('./sequelize');

const room = sequelize.define('room', {
    hotelId: {
        type: DataTypes.INTEGER
    },
    roomId: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
});

module.exports = room