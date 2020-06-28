const axios = require('axios');


const api = axios.default.create({
    baseURL: 'http://165.22.142.228:1602'
});

module.exports = api;

