import mongoose from "mongoose";

const featuredSchema=mongoose.Schema({
    roomId : {
        type : Number,
        required : true,
        unique : true
    },

    category : {
        type : String,
        required : true
    },

    maxGuests : {
        type : Number,
        required : true,
        default : 3,
    },
    available : {
        type : Boolean,
        required : true,
        default : true
    },
    photos : [
        {
            type : String
        }
    ],
    specialDescription : {
        type : String,
        default : ""
    },
    notes : {
        type : String,
        default : ""
    }
})

const featured=mongoose.model("featured",featuredSchema);

export default featured;