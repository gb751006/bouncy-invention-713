const express=require("express");
require("dotenv").config();
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { UserModel } = require("../model/user.model");
const { blacklistTokenModel } = require("../model/blacklist.model");

const userRouter=express.Router();


userRouter.post("/register",(req,res)=>{
    const {username,email,gender,age,password}=req.body;

    if(!password || password.length<8 || !/[A-Z]/.test(password) || !/[1-9]/.test(password) || !/[~`!@#$%^&*()_+\-=\[\]{};':"\\,./<>?]/.test(password)){
        return res.status(400).send({"error":"Password must be at least 8 charcter long and contain at least one uppercase character, one number and one special character"});
    }

    try {
     bcrypt.hash(password, 6, async(err, hash)=>{
         if(hash){
             const user=new UserModel({username,email,gender,age,password:hash})
             await user.save();
             res.status(200).json({"msg":"User had been registered successfully!!"})
         }else{
             res.status(200).json({"error":err})
         }
     });
    } catch (error) {
       res.status(400).json({"error":error});
    }

})

userRouter.post("/login", async(req,res)=>{
    const {email,password}=req.body;

    try {
        const user=await UserModel.findOne({email});
        bcrypt.compare(password, user.password,(err, result)=> {
            const token=jwt.sign({ userId:user._id,username:user.username}, process.env.secretCode);
            if(result){
                res.status(200).json({"msg":"User login successfully!!",token});
            }else{
                res.status(200).json({"error":err});
            }
        });
    } catch (error) {
        res.status(400).json({"error":error})
    }

})

userRouter.get("/logout",async (req,res)=>{
    const token=req.headers.authorization;
   
    try {
        if(token){
            const cheakToken= await blacklistTokenModel.findOne({token});
             if(cheakToken){
                res.status(200).json({"msg":"token Already present"});
             }
             const blackLSToken=new blacklistTokenModel({token});
             await blackLSToken.save();
             res.status(200).json({"msg":"User Logged out successfully!!"});
        }
    } catch (error) {
        res.status(400).json({"error":error});
    }
})

module.exports={userRouter};