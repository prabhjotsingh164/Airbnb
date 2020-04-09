const express = require('express');
const router = express.Router();
require("dotenv").config({path:'./config/keys.env'});
const signupModel = require("../models/signup");
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  


  router.get("/sign",(req,res)=>{
    res.render("signup",{
        title:"Signup",
        headinginfo: "Signup",
        
    })
});

router.post("/sign",(req,res)=>{
    const errors= [];
    if(req.body.email=="")
  {
    errors.push("Sorry, you must enter an email address");

  }

  if(req.body.first_name=="")
  {
    errors.push("Sorry, you must enter a  first name")
  }
  if(req.body.last_name=="")
  {
      errors.push("enter the last name")
  }
  if(req.body.mobile=="")
  {
    errors.push("Sorry, you must enter your mobile number");

  }


  if(errors.length > 0)
  {
    res.render("signup",{
      messages : errors
    })
  }
  else
  {
    const newUser = {
      email: req.body.email,
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      password:req.body.password,
      mobile:req.body.mobile,
      bday:req.body.bday
  

    }
    const user = new signupModel(newUser);
      user.save()
    .then(()=>
      {
        client.messages
    .create({
       body: `Welcome ${req.body.first_name} ${req.body.last_name} to Airbnb. Hope you find what you are looking for.`,
       from: '+12078020196',
       to: `${req.body.mobile}`
     })
    .then(message => {
      console.log(message.sid);
      res.render("welcome");
    })
    .catch((err)=>{
        console.log(`Error ${err}`);
    })

    })
      .catch(err=>console.log(`Error happened when inserting in the database :${err}`));


    const mailOptions = {
      from: process.env.NODEMAILER,
      to: `${req.body.email}`,
      subject: 'Welcome to Airbnb',
      text: 'Welcome to Airbnb. Hope you find the best room you are looking for. Enjoy'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  

    
    
    
     
    
      
      
    
  }
    
 
});

router.get("/welcome",(req,res)=>{
  res.render("welcome",{
      title:"Welcome",
      headinginfo: "Welcome",
      
  })
});


module.exports=router;
