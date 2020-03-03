const express =require('express')
const router = express.Router();
router.get("/",(req,res)=>{
    res.render("index",{
        title:"Home",
        headinginfo: "Home Page",
        randomContent:"AAAAAAAAAAAAA"
    })
    });
    
    router.get("/room-listing",(req,res)=>{
        res.render("roomlisting",{
            title:"Room Listings",
            headinginfo: "Room Listing",
            
        })
    });
    router.get("/signup",(req,res)=>{
        res.render("signup",{
            title:"Signup",
            headinginfo: "Signup",
            
        })
    });
    router.get("/login",(req,res)=>{
        res.render("login",{
            title:"Login",
            headinginfo: "Login",
            
        })
    });
    router.get("/welcome",(req,res)=>{
        res.render("welcome",{
            title:"Welcome",
            headinginfo: "Welcome",
            
        })
    });

    module.exports=router;