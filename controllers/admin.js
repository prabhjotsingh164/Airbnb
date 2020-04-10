const express = require('express');
const router = express.Router();


router.get("/admin",(req,res)=>{
    res.render("admin",{
        title:"admin",
        headinginfo: "admin",
        
    })
});




module.exports=router;