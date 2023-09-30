const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "username": {type:String,required:true},
    "email": { type: String, required: true, unique: true },
    "gender": {type:String,required:true},
    "age":{type:Number,required:true},
    "password": {type:String,required:true}
}, {
    versionKey: false
})

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };