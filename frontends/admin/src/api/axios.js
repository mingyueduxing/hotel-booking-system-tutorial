import axios from 'axios'
import { getToken } from '../service/session-storage'

axios.defaults.baseURL = 'http://localhost:3000/'
const token = getToken()
if(token) {
    axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
}
export default axios;