const mongoose = require("mongoose");

const fundSchema = mongoose.Schema({
    "Type": String,
    "amount": String,
    "country": String,
    "fundType": String,
    "image": String,
    "pincode": String,
    "state": String,
    "userId": String,
    "username": String
}, {
    versionKey: false
})

const FundModel = mongoose.model("fund", fundSchema);

module.exports = { FundModel };