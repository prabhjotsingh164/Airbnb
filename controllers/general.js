const express =require('express')
const router = express.Router();
router.get("/",(req,res)=>{
    res.render("general/index",{
        title:"Home",
        headinginfo: "Home Page",
        randomContent:"AAAAAAAAAAAAA"
    })
    });
    
    
    router.get("/signup",(req,res)=>{
        res.render("general/signup",{
            title:"Signup",
            headinginfo: "Signup",
            
        })
    });
    router.get("/login",(req,res)=>{
        res.render("general/login",{
            title:"Login",
            headinginfo: "Login",
            
        })
    });
    router.get("/welcome",(req,res)=>{
        res.render("general/welcome",{
            title:"Welcome",
            headinginfo: "Welcome",
            
        })
    });

    module.exports=router;