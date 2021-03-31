import axios from 'axios'

const getHotel = () => axios.get('http://localhost:3000/api/hotel').then(data => data.json())

export default {
    getHotel
}