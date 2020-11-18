const express=require("express")
const CORS = require('cors')
const bodyParser = require('body-parser')
const app=express()
require('./db/mongoose')

const userrouter=require("./routers/user")
const roomrouter=require("./routers/room")

const port = 5000 || process.env.PORT

app.use(CORS());
app.use(bodyParser.json())

app.use(userrouter)
app.use(roomrouter)


app.listen(port,()=>{
  console.log('server is up and running!')
})