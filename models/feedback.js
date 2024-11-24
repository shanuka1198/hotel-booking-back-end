import mongoose from "mongoose";

const feedbackSchema=mongoose.Schema(
    {
        email:{
            type:String,
            unique:true,
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

