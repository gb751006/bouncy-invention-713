const express=require("express");


const userRouter=express.Router();


userRouter.post("/add",(req,res)=>{
    res.status.send({"msg":"post has been added successfully!!"})
})

userRouter.delete("/delete",(req,res)=>{
    res.status.send({"msg":"post has been deleted successfully!!"})
})

module.exports={userRouter};