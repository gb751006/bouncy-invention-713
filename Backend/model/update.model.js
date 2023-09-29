const mongoose=require("mongoose");

const updateSchema=mongoose.Schema({
    "post":String,
    "image":String,
    "userId":String,
    "username":String
},{
    versionKey:false
})

const UpdateModel=mongoose.model("update",updateSchema);

module.exports={UpdateModel};