
const api = require('../services/api');

module.exports = {

    async send(request, response){

         const feed = await api.post('/send-message-friend',request.body);
        
        return response.json(request.body);
        }
}