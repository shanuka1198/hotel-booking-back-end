import feedback from "../models/feedback.js";
import {isCustomerValid} from "./userController.js";

export function createFeedBack(req,res) {

    if (!isCustomerValid(req)){
        res.json({
            message:"Unauthorized"
        })
    }

    // Create a new feedback document
  const newFeedback = new feedback({
        name: req.body.name, // Ensure the client sends `name`
        feedback: req.body.feedback, // Ensure the client sends `feedback`
        email: req.user.email // Email from authenticated user
    });

    // Save to the database
    newFeedback.save()
        .then((result) => {
            res.status(201).json({
                message: "Feedback is saved",
                result: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Feedback is not saved",
                error: err.message // Provide error details
            });
        });
}

export function getFeedback(req,res){
    feedback.find().then((result)=>{
        res.status(201).json({
            message: "feedback found",
            result: result
        });
    }).catch((err)=>{
        res.status(201).json({
            message: "feedback not found",
            err:err
        });
    })
}

