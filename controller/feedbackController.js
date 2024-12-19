import feedback from "../models/feedback.js";
import {isCustomerValid} from "./userController.js";
import rooms from "../models/room.js";

export function createFeedBack(req,res) {

    if (!isCustomerValid(req)){
        res.json({
            message:"Unauthorized"
        })
        return
    }



    const feedbacks={
        email: req.user.email,
        name: req.user.firstName,
        feedback: req.body.feedback,
        visible:req.body.visible
    }


    const newFeedback = new feedback(feedbacks);

    newFeedback.save()
        .then((result) => {
            res.status(201).json({
                message: "Feedback is saved",
                result: result,

            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "Feedback is not saved",
                error: err.message,

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

export function getFeedbackByVisible(req,res){

    feedback.find({visible:true}).then((result)=>{
        res.json({
            message:"get feedback",
            result:result
        })
    }).catch((err)=>{
        res.json({
            message:"can't get feedback",
            err:err
        })
    })
}

export function deleteFeedback(req,res){
    const email=req.params.email;

    feedback.deleteOne({email:email}).then((result)=>{
        if (!result){
            res.json({
                message:"user not found"
            })

        }else {
            res.json({
                message:"feedback deleted",
                result:result
            })
        }
    }).catch((err)=>{
        res.json({
            message:"feedback deleted faild",
            err:err
        })
    })
}

export function updateFeedBack(req,res){

    feedback.findOneAndUpdate({ email:req.body.email}, {visible:req.body.visible})
        .then((updatedFeedback) => {
            if (!updatedFeedback) {
                return res.status(404).json({
                    message: "Feedback not found",

                });
            }

            res.status(200).json({
                message: "Feedback updated successfully",
                result:updatedFeedback
            });
        })
        .catch((err) => {

            console.error(err);
            res.status(500).json({
                message: "Feedback to update Room",
                error: err
            });
        });
}