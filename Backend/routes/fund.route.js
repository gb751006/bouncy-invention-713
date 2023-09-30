const express = require("express");
const { auth } = require("../middleware/auth.middleware");
const { FundModel } = require("../model/fund.model");


const fundRouter = express.Router();


fundRouter.post("/add", auth, async (req, res) => {
    const payload = req.body;

    try {
        const update = new FundModel(payload);
        await update.save();
        res.status(200).send({ "msg": "fund has been added successfully!!" })
    } catch (error) {
        res.status(400).json({ error: error });
    }

})

fundRouter.get("/", auth, async (req, res) => {
    const query = req.query;

    try {
        const funds = await FundModel.find(query);
        res.status(200).json(funds);
    } catch (error) {
        res.status(400).json({ error: error });
    }

})

fundRouter.patch("/update/:id", auth, async (req, res) => {
    const { id } = req.params;
    const payload = req.body;

    try {
        const fund = await FundModel.findOne({ "_id": id });
        if (req.body.userId === fund.userId) {
            await FundModel.findByIdAndUpdate({ "_id": id }, payload);
            res.status(200).send({ "msg": "fund has been updated successfully!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})


fundRouter.delete("/delete/:id", auth, async (req, res) => {
    const { id } = req.params;

    try {
        const fund = await FundModel.findOne({ "_id": id });
        if (req.body.userId === fund.userId) {
            await FundModel.findByIdAndDelete({ "_id": id });
            res.status(200).send({ "msg": "fund has been deleted successfully!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": error });
    }
})


module.exports = { fundRouter };