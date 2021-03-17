const sequelize = require('./sequelize')
const hotel = require('./hotel')
const rooms = require('./rooms')
hotel.hasMany(rooms, {
    foreignKey: 'hotelId'
});
rooms.belongsTo(hotel);

module.exports = {
    sequelize,
    hotel,
    rooms,
}