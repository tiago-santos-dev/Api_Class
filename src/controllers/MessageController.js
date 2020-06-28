
const mongoose = require('mongoose');


mongoose.connect(
    "mongodb://localhost:27017/api_class",
    {useNewUrlParser: true, useUnifiedTopology: true}
);

require('../models/Message');
const message = mongoose.model('Message');


module.exports = {

    async index(request, response){
        
    const { page = 1 } = request.query;

    //Controla a quantidade de itens exibidos por pagina
    const Messages = await message.paginate({ }, {page , limit: 10}); 

    return response.json(Messages);

    },

    async send(request, response){
        const Message  = await message.create(request.body);
        
        return response.json(Message);
        }
}