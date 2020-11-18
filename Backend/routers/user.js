const express=require("express")
const router=new express.Router()
const User=require('../models/User')
const auth=require("../middleware/auth")
const multer=require('multer')
const sharp=require('sharp')
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs')
require('dotenv').config();
const stripe = require('stripe')('sk_test_51HmBQwB8R8hmbYXgacCbbJrTs8sxk1i9p0pTIG8jcLZC95yL1rgGLjXy2QdMaHDPN2vQnxLYa2lz2t54cs4xzVoV00uGgmPnZx');







router.post("/user",async(req,res)=>{
    const user=new User({...req.body})
    try{
        await user.save()
        // const token=await user.generateauthtoken()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.post("/user/login",async(req,res)=>{
  try{
const user=await User.findwhilelogin(req.body.email,req.body.password)
const token =await user.generateauthtoken()

res.send({token,user})}
  catch(e){
      res.status(400).send(e)
  }
})
router.post("/payment" , auth ,  (req,res) => {
  const { product , token } = req.body;
  const idempotencyKey = uuidv4();

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email,
      description: `purchase of ${product.name}`,
      shipping: {
        name: token.card.name,
        address:{
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',

        }
      }
    } , {idempotencyKey})
  })
  .then((result) => {
    res.status(200).json(result);
  })
  .catch((err) => console.log(err))

})

router.get('/user/me',auth,async(req,res)=>{
   res.send(req.user)
})
router.post("/user/logout",auth,async(req,res)=>{
try{
  req.user.tokens=req.user.tokens.filter((token)=>{
    return token.token!==req.token
  })
  await req.user.save()
  res.send({})
}
catch(e){
  res.status(500).send(e)
}

})



router.get("/user/:id",async(req,res)=>{
    const _id = req.params.id;
    try {
      const user = await User.findById(_id);
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    } catch (e) {
      res.status(500).send(e);
    }
})
router.patch("/user/me",async(req,res)=>{
const updates=Object.keys(req.body)
const possibleupdates=["email","password","userName"]
const isvalid=updates.every((update)=>possibleupdates.includes(update))
if(!isvalid){
  res.status(404).send('you are trying to do a invalid update!!')
}
try{
updates.forEach((update)=>(req.user[update]=req.body[update]))
await req.user.save()
res.send(req.user)

}catch(e){
  res.status(400).send(e)
}


})


// const deploy=multer({
//   limits:{
//     fileSize:1000000
//   },
//   fileFilter(req,file,callback){
//     if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
//       callback(new Error("please upload a file"))
//     }
//     callback(undefined,true)
//   }
// })


// router.post('/user/avatar',auth,deploy.single("deploy"),async(req,res)=>{
// const buffer=await sharp(req.file.buffer).
// resize({width:250,height:250}).png().toBuffer()
// req.user.avatar=buffer
// await req.user.save()
// },(error,req,res,next)=>{
//   res.send({err:error.message})
// })



// router.delete("/users/me",async(req,res)=>{
//     try{
//     await User.findByIdAndDelete(req.user._id)
//     res.send(req.user)}
//     catch(e){
//         res.status(400).send()

//     }

// })
module.exports=router