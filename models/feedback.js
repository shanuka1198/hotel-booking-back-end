import mongoose from "mongoose";

const feedbackSchema=mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        name:{
            type:String,
            required:true
        },
        feedback:{
            type:String,
            required:true
        },
        visible:{
            type:Boolean,
            required:true,
            default:false
        }
    }
)

const feedback=mongoose.model("feedback",feedbackSchema);

export default feedback;

