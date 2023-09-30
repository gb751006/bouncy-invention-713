const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "username": String,
    "email": { type: String, required: true, unique: true },
    "gender": String,
    "age": Number,
    "password": String
}, {
    versionKey: false
})

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };