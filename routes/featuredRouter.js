import express from "express";
import {createFeatured, getFeature} from "../controller/featuredController.js";

const featuredRouter=express.Router();

featuredRouter.get("/:roomId",createFeatured);
featuredRouter.get("/",getFeature);

export default featuredRouter;