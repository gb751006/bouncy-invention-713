const express=require("express");
const { connection } = require("./db");
const { userRouter } = require("./routes/user.routes");
require("dotenv").config();

const app=express();
app.use(express.json());


app.get("/",(req,res)=>{
    res.status(200).json({"msg":"Home Page"});
})

app.use("/users",userRouter);


app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log(`DB is connected`);
        console.log(`server is running at ${process.env.PORT}`);
    } catch (error) {
        console.log(error);
    }
    
})