import axios from 'axios'

var url = 'http://127.0.0.1:8000';

const api = axios.create({
    baseURL: url,
    headers: {'Content-Type': 'application/json'}
})

export default api