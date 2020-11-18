const express=require("express")
const router=new express.Router()
const Room=require("../models/Room")
const auth=require('../middleware/auth')
const User = require("../models/User")

router.post("/room",auth,async(req,res)=>{
    const room= new Room(
        {...req.body,
        customer:req.user._id}
        )
    try{
        await room.save()
        res.status(201).send(room)
    }
    catch(e){
        res.status(400).send(e)

    }

})
router.get("/room",auth,async(req,res)=>{
  try{
      await req.user.populate({path:'rooms'}).execPopulate()
      res.send(req.user.rooms)
  }catch(e){
      res.status(500).send(e)
  }
  
})
router.get("/room/:id",auth,async(req,res)=>{
    const _id=req.params.id
   try{ const room=await Room.findById(_id)
    if(!room){
       return res.status(404).send()

    }
    res.status(201).send()}
    catch(e){
        res.status(500).send()
    }
})
// router.delete("/room/:id",auth,async(req,res)=>{
//     try{ const room=await Room.findById(req.params.id)
//     if(!room){
//        return res.status(404).send()
//     }
//      res.status(201).send(room)
//     }catch(e){
//         res.status(500).send(e)
//     }
// })
router.delete("/room/:id", auth, async (req, res) => {
    try {
      // const task = await Task.findByIdAndDelete(req.params.id);
      const room = await Room.findOneAndDelete({
        _id: req.params.id,
        customer: req.user._id
      });
      if (!room) {
        return res.status(404).send();
      }
      res.send(room);
    } catch (e) {
      res.status(400).send(e);
    }
  });

module.exports=router