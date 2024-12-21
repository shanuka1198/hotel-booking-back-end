import express from "express";
import {
    createBooking,
    deleteBooking,
    findBookingByEmail,
    getBooking
} from "../controller/bookingController.js";

const bookingRouter=express.Router();

bookingRouter.post("/",createBooking);
bookingRouter.get("/:email",findBookingByEmail);
bookingRouter.delete("/:bookingId",deleteBooking);
bookingRouter.get("/",getBooking);


export default bookingRouter;