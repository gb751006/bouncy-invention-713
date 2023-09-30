const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    "post": String,
    "image": String,
    "ts":String,
    "userId": String,
    "username": String
}, {
    timestamps: true, 
    versionKey: false
})

const PostModel = mongoose.model("post", postSchema);

module.exports = { PostModel };