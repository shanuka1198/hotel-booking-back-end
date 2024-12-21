import booking from "../models/booking.js";
import {isCustomerValid} from "./userController.js";

export function createBooking(req, res) {
    if (!isCustomerValid(req)) {
        return res.json({
            message: "Unauthorized",
        });
    }

    const stringId = 1200;

    booking.countDocuments({})
        .then((count) => {
            const bookingId = stringId + count + 1;


            const newBooking = new booking({
                bookingId: bookingId,
                roomId: req.body.roomId,
                email: req.user.email,
                whatsApp: req.user.whatsApp || "N/A", // Fallback if missing
                phone: req.user.phone || "N/A", // Fallback if missing
                firstName: req.user.firstName,
                start: req.body.start,
                end: req.body.end,
                price:req.body.price,
                category: req.body.category,
                notes: req.body.notes,
            });

            newBooking
                .save()
                .then((result) => {
                    res.json({
                        message: "Booking saved",
                        result: result,
                        user:req.user
                    });
                })
                .catch((err) => {
                    res.json({
                        message: "Booking can't save",
                        result: err,
                    });
                });
        })
        .catch((err) => {
            res.json({
                message: "Booking creation failed",
                result: err,
            });
        });
}




export function deleteBooking(req,res){
    const bookingId=req.params.bookingId;
    booking.findOneAndDelete({bookingId:bookingId}).then(

        (result)=>{
            if (result==null){
                res.json({
                    message:"booking id not found"
                })
            }else {
                res.json({
                    message:"Delete Booking",
                    result:result
                })
            }
        }

    ).catch(
        ()=>{
            res.json({
                message:"Can't Delete Booking"
            })
        }
    )
}

export function findBookingByEmail(req,res){
    const email=req.params.email;

    booking.findOne({email:email}).then(
        (result)=>{
            if (result==null){
                res.json({
                    message:"Booking email NOt Found"
                })
            }else{
                res.json({
                    message:"Search Booking",
                    result:result
                })
            }
        }
    ).catch(
        ()=>{
            res.json({
                message:"Can't Find Booking"
            })
        }
    )
}

export function getBooking(req,res){
    booking.find().then((result)=>{
            res.json({
                message:"Booking save",
                result:result
            })

        }).catch(
            (err)=>{
                res.json({
                    message:"Booking can't save",
                    result:err
                })
            }
        )
}