const express = require('express');
const router = express.Router();


router.get("/welcome",(req,res)=>{
    res.render("welcome",{
        title:"Welcome",
        headinginfo: "Welcome",
        
    })
});




module.exports=router;