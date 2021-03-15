const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const user = sequelize.define('user', {
	name: {
		type: DataTypes.STRING,
	},
	password: {
		type: DataTypes.STRING,
	},
	role: {
		type: DataTypes.STRING,
	},
});

module.exports = user;
