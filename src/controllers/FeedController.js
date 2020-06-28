
const api = require('../services/api');

module.exports = {

    async index(request, response){

    const feed = await api.get('/feednews');

    return response.json(feed.data);

    },

    async send(request, response){

        const feed = await api.post('/send-feed',request.body);
        
        return response.json(request.body);
        }
}