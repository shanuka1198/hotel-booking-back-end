import express from "express";
import {createFeatured} from "../controller/featuredController.js";

const featuredRouter=express.Router();

featuredRouter.get("/:roomId",createFeatured);

export default featuredRouter;