const jwt = require("jsonwebtoken");
require("dotenv").config();
const { blacklistTokenModel } = require("../model/blacklist.model");


const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (token) {
        const cheak = await blacklistTokenModel.findOne({ token });
        if (cheak) {
            res.status(200).json("Please Login Again !!");
        } else {
            jwt.verify(token, process.env.secretCode, (err, decoded) => {
                if (decoded) {
                    req.body.userId = decoded.userId;
                    req.body.username = decoded.username;
                    next();
                } else {
                    res.status(200).json({ error: err });
                }
            })
        }
    } else {
        res.status(400).json({ "msg": "You are not authorized" });
    }
}

module.exports = { auth };