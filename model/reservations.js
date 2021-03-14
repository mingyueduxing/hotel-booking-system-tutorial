const { DataTypes } = require('sequelize')
const sequelize = require('./sequelize');

const resevations = sequelize.define('resevations', {
    resevationId: {
        type: DataTypes.INTEGER
    },
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    roomId: {
        type: DataTypes.STRING
    },
    checkIn: {
        type: DataTypes.DATE

    },
    checkOut: {
        type: DataTypes.DATE
    },

    status: {
        type: DataTypes.STRING
    },

    notes: {
        type: DataTypes.STRING
    },

    payment: {
        type: DataTypes.STRING
    }
});

module.exports = resevations