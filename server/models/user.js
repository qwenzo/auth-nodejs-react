const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email:{
            type:String,
            lowercase:true,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

const userModel = mongoose.model('User',User);

module.exports = userModel;