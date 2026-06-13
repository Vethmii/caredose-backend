import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import app from "./src/app";


dotenv.config();


mongoose.connect(process.env.MONGO_URL as string)
.then(() =>{console.log("MongoDB Connected");})
.catch((err)=>{console.log("MongoDB connection failed"); console.log(err.message);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);});