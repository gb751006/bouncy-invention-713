const express=require("express");
const { UpdateModel } = require("../model/update.model");
const { auth } = require("../middleware/auth.middleware");


const updateRouter=express.Router();


updateRouter.post("/add",auth,async(req,res)=>{
    const payload=req.body;

    try {
        const update= new UpdateModel(payload);
        await update.save();
        res.status(200).send({"msg":"update has been added successfully!!"})
    } catch (error) {
        res.status(400).json({error:error});
    }
    
})

updateRouter.delete("/delete/:id",auth,async(req,res)=>{
    const {id}=req.params;

    try {
        await UpdateModel.findByIdAndDelete({"_id":id});
        res.status(200).send({"msg":"update has been deleted successfully!!"})
    } catch (error) {
        res.status(400).send({"err":error});
    }
})


module.exports={updateRouter};