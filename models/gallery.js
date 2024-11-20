import mongoose from "mongoose";

const gallerySchema=mongoose.Schema(
    {
        name:{
            type:String,
            unique:true,
            required:true
        },
        image:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    }
)

const gallery=mongoose.model("gallery",gallerySchema);

export default gallery;