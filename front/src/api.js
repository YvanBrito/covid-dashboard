import axios from 'axios'

var url = 'http://localhost:5000';

const api = axios.create({
    baseURL: url,
    headers: {'Content-Type': 'application/json'}
})

export default api