import express from "express";
import {saveGallery, getGalleryItems, deleteGalleryItemFromName} from "../controller/galleryController.js";

const galleryRouter=express.Router();

galleryRouter.post("/",saveGallery);
galleryRouter.get("/",getGalleryItems);
galleryRouter.delete("/:name",deleteGalleryItemFromName)

export default galleryRouter;