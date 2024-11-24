import  {createFeedBack,getFeedback} from "../controller/feedbackController.js";
import express from "express";

const feedbackRouter=express.Router();

feedbackRouter.post("/",createFeedBack);
feedbackRouter.get("/",getFeedback);

export default feedbackRouter;