const sequelize = require('./sequelize')
const hotel = require('./hotel')
const rooms = require('./rooms')
const users = require("./users")
const reservation = require("./reservations")
const roomAmentities = require("./roomsAMentities")
const amentities = require("./amenities")

hotel.hasMany(rooms, {
    foreignKey: 'hotelId'
});

rooms.hasMany(reservation, {
    foreignKey: "roomId"
});

roomAmentities.hasMany(rooms, {
    foreignKey: "roomId"
})

roomAmentities.hasMany(amentities, {
    foreignKey:"recordId"
})
rooms.belongsTo(hotel);



module.exports = {
    sequelize,
    hotel,
    rooms,
    users,
    reservation,
    roomAmentities
}