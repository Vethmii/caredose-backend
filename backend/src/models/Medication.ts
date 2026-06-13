import mongoose from "mongoose";
const medicationSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    dosage:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true,
    },
    frequency:{
        type:String,
        default:"Once Daily",
    },
    taken:{
        type:Boolean,
        default:false,
    },
},{timestamps:true});

export default mongoose.model("Medication",medicationSchema);