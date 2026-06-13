import  {getMedi, addMedi,deleteMedi,updateMedi,markTaken} from "../controllers/medicationController";
import {protect} from "../middleware/authMiddleware";
import express from "express";

const router=express.Router();

router.get("/",protect,getMedi);
router.post("/",protect,addMedi);
router.put("/:id",protect,updateMedi);
router.delete("/:id",protect,deleteMedi);
router.patch("/:id/taken",protect,markTaken);

export default router;

