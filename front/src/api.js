import axios from 'axios'

var url = 'http://35.247.219.149/';

const api = axios.create({
    baseURL: url,
    headers: {'Content-Type': 'application/json'}
})

export default api