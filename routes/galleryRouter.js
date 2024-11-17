import express from "express";
import {saveGallery,getGalleryItems} from "../controller/galleryController.js";

const galleryRouter=express.Router();

galleryRouter.post("/",saveGallery);
galleryRouter.get("/",getGalleryItems);

export default galleryRouter;