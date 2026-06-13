import User from "../models/User";
import bcrypt from "bcrypt";
import {generateToken} from "../utils/generateToken";

export const registerUser=async(req:any, res:any)=>{
    console.log("REGISTER HIT");
    console.log(req.body);
    try{
        const {name, email, phoneNumber, dateOfBirth, password, }= req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){return res.status(400).json({message:"User already exists",});}
    
        
        const hashedPassword=await bcrypt.hash(password, 10); 
        const user=await User.create({name, email, phoneNumber, dateOfBirth, password:hashedPassword,});
        res.status(201).json({message:"Registered sucessfully", user,});
    }catch(error:any){
        console.log("REGISTER ERROR", error);
        return res.status(500).json({message:error.message,error});
    }
};

export const loginUser=async(req:any,res:any)=>{
    try{
        const {email, password}=req.body;
        const user=await User.findOne({email});
        if(!user){return res.status(400).json({message:"User not found"});}

        const isMatch=await bcrypt.compare(password, user.password);
        if(!isMatch){return res.status(400).json({message:"Invalid Credentials"});}

        const token=generateToken(user._id.toString());

        res.status(200).json({message:"Login succesful", token, user:{_id:user._id,name:user.name,email:user.email,phoneNumber:user.phoneNumber,dateOfBirth:user.dateOfBirth}});
    }catch(error){res.status(500).json(error);}
    
};
