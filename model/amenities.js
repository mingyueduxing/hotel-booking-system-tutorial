const { DataTypes } = require('sequelize')
const sequelize = require('./sequelize');

const amentities = sequelize.define('amentities', {
    recordId: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING
    },
      
    
});

module.exports = amentities