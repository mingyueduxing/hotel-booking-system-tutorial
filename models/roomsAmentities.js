const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize');

const roomsAmentities = sequelize.define('roomsAmentities', {
	roomId: {
		type: DataTypes.STRING,
	},
	amenityID: {
		type: DataTypes.INTEGER,
	},
});

module.exports = roomsAmentities;
