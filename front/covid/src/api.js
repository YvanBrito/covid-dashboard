import axios from 'axios'

var url = 'http://192.168.15.10:8000/';

const api = axios.create({
    baseURL: url,
    headers: {'Content-Type': 'application/json'}
})

export default api