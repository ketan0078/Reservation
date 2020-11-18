const mongoose = require('mongoose')
require('dotenv').config();
// import  dotenv from 'dotenv'
// dotenv.config();

mongoose.connect( process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

