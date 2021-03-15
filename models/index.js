const sequelize = require('./sequelize');
const hotel = require('./hotel');
const rooms = require('./rooms');
const reservations = require('./reservations');
const amentities = require('./amentities');
const users = require('./users');
const roomsAmentities = require('./roomsAmentities');

hotel.hasMany(rooms, {
	foreignKey: 'hotelId',
});
rooms.belongsTo(hotel);

rooms.hasMany(reservations, {
	foreignKey: 'roomId',
});
reservations.belongsTo(rooms);

rooms.hasMany(roomsAmentities, {
	foreignKey: 'roomId',
});
roomsAmentities.belongsTo(rooms);

module.exports = {
	sequelize,
	hotel,
	rooms,
	reservations,
	amentities,
	users,
	roomsAmentities,
};
