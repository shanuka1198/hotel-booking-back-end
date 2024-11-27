import express from "express";
import mongoose from "mongoose"
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import galleryRouter from "./routes/galleryRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import categoryRouter from "./routes/categoryRouter.js";
import roomsRouter from "./routes/roomsRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
import feedbackRouter from "./routes/feedbackRouter.js";
import cors from "cors";

dotenv.config()

const app=express();
app.use(cors());
app.use(bodyParser.json());


const connectionString=process.env.MONGO_URL;
mongoose.connect(connectionString).then(
    ()=>{
        console.log("database connect");
    }
).catch(
    ()=>{
        console.log("connection fail");
    }
)

app.use((req,res,next)=>{
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (token!=null){
        jwt.verify(token,"secret",(err,decode)=>{
            if (decode!=null){
                req.user=decode
                next();
            }
        })
    }else {
        next();
    }
})

app.use("/api/users",userRoutes);
app.use("/api/gallery",galleryRouter);
app.use("/api/category",categoryRouter);
app.use("/api/rooms",roomsRouter);
app.use("/api/booking",bookingRouter);
app.use("/api/feedback",feedbackRouter);




app.listen(5000,(req,res)=>{
    console.log("server is start from port 5000")
})