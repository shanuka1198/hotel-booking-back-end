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

export function deleteGalleryItemFromName(req, res) {

    const name = req.params.name;

    gallery.findOneAndDelete({name:name})
        .then((result) => {
            if (!result) {
                return res.status(404).json({
                    message: "Gallery item not found"
                });
            }

            res.json({
                message: "Image is deleted successfully",
                result: result
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error occurred",
                error: err.message
            });
        });
}