import jwt from "jsonwebtoken";
import User from "../models/User";
import {Request, Response, NextFunction} from "express";

export interface AuthRequest extends Request{user?:any;}

export const protect=async(req:AuthRequest,res:Response,next:NextFunction)=>{
    let token:string|undefined 
    console.log("AUTH HEADER:");
    console.log("req.headers.authorization");
     if(req.headers.authorization?.startsWith("Bearer") )
     {try{token=req.headers.authorization.split(" ")[1];
          console.log("TOKEN:");
          console.log(token);
        const decoded=jwt.verify(token,process.env.JWT_SECRET as string) as {id:string};
        req.user=await User.findById(decoded.id).select("-password");
        next();
     }catch(error){console.log("JWT ERROR:", error);{return res.status(401).json({message:"Not Authorized",});} } 
     }if (!token){return res.status(401).json({message:"NoToken",});}
};