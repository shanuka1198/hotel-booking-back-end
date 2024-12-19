import mongoose from "mongoose";

const bookingSchema=mongoose.Schema({
    bookingId:{
        type: Number,
        required: true,
        unique: true
    },
    roomId:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    firstName:{
        type: String,

    },
    status:{
        type: String,
        required: true,
        default: "pending"
    },
    reason:{
        type: String,
        default: ""
    },
    start:{
        type: Date,
        required: true
    },
    end:{
        type: Date,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    notes: {
        type: String,
        default: ""
    },
    timestamp:{
        type: Date,
        default: Date.now
    }
})

const booking=mongoose.model("bookings",bookingSchema);

export default booking;