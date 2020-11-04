const express = require('express')
require("./db/mongoose");



const app = express();

const port  = 3000 || process.env.PORT; 


app.listen(port , () => {
    console.log("server is up on port " , port);
})