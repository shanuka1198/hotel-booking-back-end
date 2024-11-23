import express from "express";
import {
    saveGallery,
    getGalleryItems,
    deleteGalleryItemFromName,
    updateGallery
} from "../controller/galleryController.js";

const galleryRouter=express.Router();

galleryRouter.post("/",saveGallery);
galleryRouter.get("/",getGalleryItems);
galleryRouter.delete("/:name",deleteGalleryItemFromName);
galleryRouter.put("/:name",updateGallery)

export default galleryRouter;