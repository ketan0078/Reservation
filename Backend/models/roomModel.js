const mongoose = require('mongoose')


const roomSchema = new mongoose.Schema({
    roomName: {
        type:String,
        required:true,
        trim:true,

    },
    roomType: {
        type:String,
        required:true,
        trim:true,
        
    },
    price: {
        type: Number,
        required:true,

    },
    max_capacity: {
        type: Number,
        required:true
    }
})

const Room = mongoose.model("Room" , roomSchema);

module.exports = Room;