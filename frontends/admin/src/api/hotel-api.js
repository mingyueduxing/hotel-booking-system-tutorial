const getHotel = () => fetch('http://localhost:3000/api/hotel').then(data => data.json())

export default {
    getHotel
}