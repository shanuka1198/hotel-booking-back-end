import express from "express";
import {createBooking,deleteBooking,findBookingById} from "../controller/bookingController.js";

const bookingRouter=express.Router();

bookingRouter.post("/",createBooking);
bookingRouter.get("/:bookingId",findBookingById);
bookingRouter.delete("/:bookingId",deleteBooking);


export default bookingRouter;