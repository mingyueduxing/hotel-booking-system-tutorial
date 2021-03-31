import axios from 'axios'

const login = (payload) => axios.post('http://localhost:3000/api/login', payload)

export default login