import axios from 'axios'
import { getToken } from '../service/session-storage'

const fetchUsers = () => {
    const access_token = getToken()
    const options = {
        headers: {
            'Authorization': `token ${access_token}`
        }
    }
    return axios.get('http://localhost:3000/api/users', options)
}

export default fetchUsers