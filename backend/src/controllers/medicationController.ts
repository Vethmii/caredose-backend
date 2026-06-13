import Medication from "../models/Medication";
import {Response} from "express";
import {AuthRequest} from "../middleware/authMiddleware";

//geting use medication logs
export const getMedi=async(req:AuthRequest, res:Response)=>{
    try{const medicine=await Medication.find({user:req.user._id});
    res.json(medicine);
    }catch(err){res.status(500).json({message:"error fetching medications"});}
};
//Adding use medication
export const addMedi=async(req:AuthRequest, res:Response)=>{
    try{const{name,dosage,time,frequency}=req.body;
    const medicine=await Medication.create({user:req.user._id,name,dosage,time,frequency,});
    res.status(201).json(medicine);
    }catch(err){res.status(500).json({messsage:"Error on Adding Medication"});}
};
//Update medication
export const updateMedi=async(req:AuthRequest, res:Response)=>{
    try{const medicine=await Medication.findOneAndUpdate({_id:req.params.id,user:req.user._id},req.body,{new:true});
    res.json(medicine);
    }catch{res.status(500).json({message:"error updating medication"});}
};
//Delete medications
export const deleteMedi=async(req:AuthRequest, res:Response)=>{
    try{const medicine=await Medication.findOneAndDelete({_id:req.params.id,user:req.user._id});
    res.json({message:"Deleted Sucessfully"});
    }catch{res.status(500).json({message:"error deleting medication"});}
};
//Mark with taken 
export const markTaken=async(req:AuthRequest, res:Response)=>{
    try{const medicine=await Medication.findOneAndUpdate({_id:req.params.id,user:req.user._id},{taken:true},{new:true});
    res.json(medicine);
    }catch{res.status(500).json({message:"error updating status"});}
};