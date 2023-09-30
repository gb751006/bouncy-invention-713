const express = require("express");
const { PostModel } = require("../model/post.model");
const { auth } = require("../middleware/auth.middleware");


const postRouter = express.Router();


postRouter.post("/add", auth, async (req, res) => {
    const payload = req.body;

    try {
        const post = new PostModel(payload);
        await post.save();
        res.status(200).send({ "msg": "Post has been added successfully!!" })
    } catch (error) {
        res.status(400).json({ error: error });
    }

})


postRouter.get("/", auth, async (req, res) => {
    const query = req.query;

    try {
        const posts = await PostModel.find(query);
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ error: error });
    }

})

postRouter.patch("/update/:id", auth, async (req, res) => {
    const { id } = req.params;
    const payload = req.body;

    try {
        const post = await PostModel.findOne({ "_id": id });
        if (req.body.userId === post.userId) {
            await PostModel.findByIdAndUpdate({ "_id": id }, payload);
            res.status(200).send({ "msg": "Post has been updated successfully!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})

postRouter.delete("/delete/:id", auth, async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostModel.findOne({ "_id": id });
        if (req.body.userId === post.userId) {
            await PostModel.findByIdAndDelete({ "_id": id });
            res.status(200).send({ "msg": "Post has been deleted successfully!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})


module.exports = { postRouter };