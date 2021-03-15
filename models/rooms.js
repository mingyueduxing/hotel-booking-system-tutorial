const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const room = sequelize.define('room', {
	hotelId: {
		type: DataTypes.INTEGER,
	},
	roomId: {
		type: DataTypes.STRING,
	},
	status: {
		type: DataTypes.STRING,
	},
	price: {
		type: DataTypes.FLOAT,
	},
	type: {
		type: DataTypes.STRING,
	},
	capacity: {
		type: DataTypes.INTEGER,
	},
	description: {
		type: DataTypes.STRING,
	},
});

module.exports = room;
