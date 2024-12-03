import express from "express";
import {createFeatured, deleteFeature, getFeature} from "../controller/featuredController.js";

const featuredRouter=express.Router();

featuredRouter.get("/:roomId",createFeatured);
featuredRouter.get("/",getFeature);
featuredRouter.delete("/:roomId",deleteFeature);

export default featuredRouter;