const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid!")
            }
        }
    },

});


const User = mongoose.model("User" , userSchema);
module.exports = User;