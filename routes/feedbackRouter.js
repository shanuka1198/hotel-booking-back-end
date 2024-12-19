import {
    createFeedBack,
    deleteFeedback,
    getFeedback,
    getFeedbackByVisible,
    updateFeedBack
} from "../controller/feedbackController.js";
import express from "express";

const feedbackRouter=express.Router();

feedbackRouter.post("/",createFeedBack);
feedbackRouter.get("/",getFeedback);
feedbackRouter.get("/visible",getFeedbackByVisible);
feedbackRouter.delete("/:email",deleteFeedback);
feedbackRouter.put("/visible",updateFeedBack);

export default feedbackRouter;