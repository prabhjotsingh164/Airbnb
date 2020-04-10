const express = require('express');
const router = express.Router();
const userModel = require("../models/signup");
const bcrypt = require("bcryptjs");
const isAuth  = require("../middleware/auth");
const isAuthor  = require("../middleware/author");


router.get("/log",(req,res)=>{
    res.render("login",{
        title:"Login",
        headinginfo: "Login",
        
    })
});



router.post("/log",(req,res)=>{
    
  userModel.findOne({email:req.body.uname})
  .then(user=>{
    const errors= [];
   

    
  
  
    if(user==null)
    {
      errors.push("Sorry, your email and/or password is incorrect");
      res.render("login",{
        messages : errors
      })
    }

    else
    {
      bcrypt.compare(req.body.psw, user.password)
      .then(isMatched=>{
        if(isMatched)
        {
          req.session.userInfo=user;
          isAuthor(req,res);
          //res.redirect("welcome");
        }
        else
        {
          errors.push("Sorry, your email and/or password is incorrect");
          res.render("login",{
            messages : errors
          })  
        }
      })
      .catch(err=>console.log(`Error ${err}`));
    }

  })
  .catch(err=>console.log(`Error ${err}`));
  
  

});
router.get("/welcome",isAuth,(req,res)=>{
  res.render("welcome",{
      title:"Welcome",
      headinginfo: "Welcome",
      
  })
});
router.get("/admin",(req,res)=>{
  res.render("admin",{
      title:"admin",
      headinginfo: "admin",
      
  })
});

router.get("/out",(req,res)=>
{
  req.session.destroy();
  res.redirect("log");
  
})



module.exports=router;