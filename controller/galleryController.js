import gallery from "../models/gallery.js";
import {isCustomerValid} from "./userController.js";


export function saveGallery(req,res){
    if (!isCustomerValid(req)){
        res.json({
            message:"Unauthorized"
        })
    }

    const galleryDetails=req.body;
    const newGallery=new gallery(galleryDetails);

        newGallery.save().then(
        ()=>{
            res.json({
                message:"saved gallery"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message:"didn't saved gallery"
            })
        }
    )
}

export function getGalleryItems(req,res){

    gallery.find().then(
        (list)=>{
            res.json({
                list : list
            })
        }
    )
}

