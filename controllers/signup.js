const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'singh19m94@gmail.com',
      pass: 'fengles1994!'
    }
  });
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
    const accountSid = 'AC19c80835ab35434b88c649ae6e26b9a1';
    const authToken = 'c993064fd7e8dff47cd51401cef4373b';
    const client = require('twilio')(accountSid, authToken);

    const mailOptions = {
        from: 'mig1994.prabh@gmail.com',
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

  }
    


});

module.exports=router;
