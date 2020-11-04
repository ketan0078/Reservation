const mongoose = require('mongoose')

mongoose.connect( "mongodb://localhost:27017/hotelDB" , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

