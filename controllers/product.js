const express =require('express')
const router = express.Router();
router.get("/room-listing",(req,res)=>{
    res.render("roomlisting",{
        title:"Room Listings",
        headinginfo: "Room Listing",
        
    })
});
module.exports=router;