const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const reservation = sequelize.define('reservation', {
	firstName: {
		type: DataTypes.STRING,
	},
	lastName: {
		type: DataTypes.STRING,
	},
	roomId: {
		type: DataTypes.STRING,
	},
	checkin: {
		type: DataTypes.DATE,
	},
	checkout: {
		type: DataTypes.DATE,
	},
	status: {
		type: DataTypes.STRING,
	},
	notes: {
		type: DataTypes.STRING,
	},
	payment: {
		type: DataTypes.STRING,
	},
});

module.exports = reservation;
