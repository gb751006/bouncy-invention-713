const express = require("express");
const cors = require("cors")
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
const { postRouter } = require("./routes/post.route");
const { fundRouter } = require("./routes/fund.route");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({ "msg": "Home Page" });
})

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/funds", fundRouter);

app.listen(process.env.PORT, async () => {
    try {
        await connection;
        console.log(`DB is connected`);
        console.log(`server is running at ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
})