const jwt=require('jsonwebtoken')
const User=require('../models/User')
require('dotenv').config();
// import  dotenv from 'dotenv'
// dotenv.config();

const auth=async (req,res,next)=>{
try{
    const token = req.header("Authorization").replace("Bearer ", "");
console.log(token)
const decoded=jwt.verify(token,process.env.SECRET_KEY)

const user=await User.findOne({
    _id:decoded._id,
    "tokens.token":token

})
if(!user){
    throw new Error()
}
req.token=token
req.user=user
next()
}catch(e){
res.status(401).send(e.message)
}
}
module.exports=auth