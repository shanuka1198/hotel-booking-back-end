import createFeedBack from "../controller/feedbackController.js";
import express from "express";

const feedbackRouter=express.Router();

feedbackRouter.post("/",createFeedBack);

export default feedbackRouter;