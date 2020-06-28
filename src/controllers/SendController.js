
const api = require('../services/api');

module.exports = {

    async send(request, response){

        try {

        api.post('/send-message-friend',request.body).then((res) => {

            return response.json(res.data);
        } ).catch((err) => {
            return response.status(400).json({error: err.message});
        });

        } catch (error) {
        return response.status(400).json({error: error.message});
        }

    }
}