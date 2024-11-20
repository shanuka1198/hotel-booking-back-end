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
    // Authorization check
    // if (!isCustomerValid(req)) {
    //     res.status(401).json({
    //         message: "Unauthorized"
    //     });
    //     return
    // }
    const name = req.params.name;
    try {
        gallery.findOneAndDelete({ name: name})
            .then((result) => {
                res.json({
                        message: "Gallery deleted",
                        result:result,
                        name:name
                    });

            }).catch((err) => {
                res.json({
                    message: "An error occurred",
                    error: err
                });
            });
    }catch (e) {
        console.log(e);
    }

}

