import axios from 'axios'

var url = 'https://35.198.8.71/';

const api = axios.create({
    baseURL: url,
    headers: {'Content-Type': 'application/json'}
})

export default api