import mongoose from "mongoose";

const categorySchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        price:{
            type:String,
            required:true
        },
        features:[
            {
                type: String,
                required: true
            }
        ],
        description:{
            type:String,
            required:true
        },
        image:{
            type:String,
        }
    }
)
const category=mongoose.model("categories",categorySchema);
export default category;