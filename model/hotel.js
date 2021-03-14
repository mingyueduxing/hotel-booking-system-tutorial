
const { DataTypes } = require('sequelize')
const sequelize = require('./sequelize');

const hotel = sequelize.define('hotel', {
    name: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    }, 
    street: {
        type: DataTypes.STRING
    }, 
    email: {
        type: DataTypes.STRING
    }, 
    phone: {
        type: DataTypes.STRING
    },
});

module.exports = hotel