
const mongoose = require('mongoose');


mongoose.connect(
    "mongodb://localhost:27017/api_class",
    {useNewUrlParser: true, useUnifiedTopology: true}
);

require('../models/Message');
const message = mongoose.model('Message');


module.exports = {

    async index(request, response){

    const Messages = await message.find(); 

    return response.json(Messages);

    },

    async send(request, response){

        try {
            const Message  = await message.create(request.body);
            
            return response.json(request.body);

            } catch (error) {
            return response.status(400).json({error: error.message});
            }

        }
}