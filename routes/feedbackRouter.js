import {createFeedBack, getFeedback, getFeedbackByVisible} from "../controller/feedbackController.js";
import express from "express";

const feedbackRouter=express.Router();

feedbackRouter.post("/",createFeedBack);
feedbackRouter.get("/",getFeedback);
feedbackRouter.get("/visible",getFeedbackByVisible);

export default feedbackRouter;