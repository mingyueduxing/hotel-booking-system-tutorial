const { DataTypes } = require('sequelize')
const sequelize = require('./sequelize');

const roomAmentities = sequelize.define('roomAmentities', {
    recordId: {
        type: DataTypes.INTEGER
    },
    roomId: {
        type: DataTypes.STRING
    },
    amenityID: {
        type: DataTypes.INTEGER
    },
    
});

module.exports = roomAmentities