import express from "express";
import authRoutes from "./routes/authRoutes";
import cors from "cors";
import medicationRoutes from "./routes/medicationRoutes";

const app=express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CareDose Backend is running");
});

app.use("/api/auth/", authRoutes);
app.use("/api/medications",medicationRoutes);



export default app;