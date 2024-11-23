import gallery from "../models/gallery.js";
import {isAdminValid, isCustomerValid} from "./userController.js";
import category from "../models/category.js";


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

export function updateGallery(req, res) {

    const name = req.params.name;
    gallery.findOneAndUpdate({ name: name }, req.body,{ new: true })
        .then((updatedGallery) => {
            if (!updatedGallery) {
                return res.status(404).json({
                    message: "Gallery not found",
                });
            }

            res.status(200).json({
                message: "Gallery updated successfully",
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: "Failed to update Gallery",
                error: err
            });
        });
}