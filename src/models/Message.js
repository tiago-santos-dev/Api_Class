const mongoose = require ('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const MessageSchema = new  mongoose.Schema({
    from : {
        type : String,
        required : true,        
    },
    to : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        required : true,
    },
    apiurl: {
        type : String,
        required : true,
    },
    createdAt : {     //Define Hora da inseçao no banco
        type : Date,
        default : Date.now,
    }
})

MessageSchema.plugin(mongoosePaginate);

mongoose.model ('Message' , MessageSchema);