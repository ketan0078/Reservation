const mongoose = require('mongoose')


const roomSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        trim:true,

    },
    // roomType: {
    //     type:String,
    //     required:true,
    //     trim:true,
        
    // },
    url:{
    type:String
    },
    price: {
        type: Number,
        required:true,

    },
    max_capacity: {
        type: Number,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User" 
    },
    floor:{
        type:Number,
        required:true
    },
    details:{
        type:String,
        required:true
    }
})

const Room = mongoose.model("Room" , roomSchema);

module.exports = Room;