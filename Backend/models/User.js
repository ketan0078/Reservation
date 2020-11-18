const mongoose = require('mongoose')
const validator = require('validator')
const jwt=require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const Room =require('./Room')
require('dotenv').config()
// import  dotenv from 'dotenv'
// dotenv.config();
const { deleteOne } = require('./Room')

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
        },
        
    },
    // gender:{
    //     type:String,
    //     required:true
    // },
    password:{
        type:String,
        trim:true,
        validate(value){
            if (value<5){
                throw new Error ("please enter a value greater than 5")
            }
        },
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error("Password Invalid");
            }
        },
        required:true


    },
    tokens:[
       {
           token:{
              type:String ,
              required:true
           },
       },
    ],
    avatar:{
        type:Buffer
    }
   

});
userSchema.virtual("rooms",{
    ref:"Room",
    localField:"_id",
    foreignField:"customer"

})


userSchema.pre("save",async function (next){
const user=this
if(user.isModified("password")){
    user.password=await bcrypt.hash(user.password,8)


}
next()


})
userSchema.pre('remove',async function(next){
    const user=this
    await Room.deleteMany({customer:user._id})
})


userSchema.methods.toJSON=function(){
    const user=this
    const userobject=user.toObject()
    
    delete userobject.password
    delete userobject.tokens

    return userobject

}

userSchema.methods.generateauthtoken=async function(){
const user=this
const token=jwt.sign({_id:user._id.toString()},process.env.SECRET_KEY)
user.tokens=user.tokens.concat({token})

await user.save()
return token

}


userSchema.statics.findwhilelogin=async(email,password)=>{
 const user=await User.findOne({email})
 if(!user){
     throw new Error ("login failed")
 }
 const ismatch=await bcrypt.compare(password,user.password)
 if(!ismatch){
     throw new Error ("login failed")
 }
 return user


}


const User = mongoose.model("User" , userSchema);
module.exports = User;  