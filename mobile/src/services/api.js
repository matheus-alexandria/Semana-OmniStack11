//192.168.0.42
//2804:14c:de84:90f2:2d6e:ae7:a62c:8a72

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.42:3333'
});

export default api;