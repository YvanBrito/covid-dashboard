import axios from 'axios'

var url = 'http://35.198.8.71/';

const api = axios.create({
    baseURL: url,
    headers: {'Content-Type': 'application/json'}
})

export default api