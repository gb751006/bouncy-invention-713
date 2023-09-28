const mongoose=require("mongoose");

const updateSchema=mongoose.Schema({
    "post":String,
    "image":String,
    "userID":String,
    "username":Number
   
},{
    versionKey:false
})

const UpdateModel=mongoose.model("user",updateSchema);

module.exports={UpdateModel};