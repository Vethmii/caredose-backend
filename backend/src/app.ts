import express from "express";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import medicationRoutes from "./routes/medicationRoutes";

const app=express();
app.use(cors());
app.use(express.json());
app.use("/api/auth/", authRoutes);
app.use("/api/medications",medicationRoutes);



export default app;