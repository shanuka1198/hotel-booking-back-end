import express from "express";
import {createFeatured, deleteFeature, getFeature, getFeatureById} from "../controller/featuredController.js";

const featuredRouter=express.Router();

featuredRouter.get("/",getFeature);
featuredRouter.delete("/:roomId",deleteFeature);
featuredRouter.get("/byId/:roomId",getFeatureById);
featuredRouter.get("/:roomId",createFeatured);
export default featuredRouter;