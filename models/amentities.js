const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const amentities = sequelize.define('amentities', {
	name: {
		type: DataTypes.STRING,
	},
});

module.exports = amentities;
