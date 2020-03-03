const express =require('express')
const router = express.Router();
router.get("/room-listing",(req,res)=>{
    res.render("models/feature_rooms.js",{
        title:"Room Listings",
        headinginfo: "Room Listing",
        
    })
});
module.exports=router;