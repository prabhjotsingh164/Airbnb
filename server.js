const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();


//This allows express to make staic content available from the public
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//This tells express to set and register handlebars as its template/viewengine
app.get("/",(req,res)=>{
res.render("index",{
    title:"Home",
    headinginfo: "Home Page",
    randomContent:"AAAAAAAAAAAAA"
})
});

app.get("/room-listing",(req,res)=>{
    res.render("roomlisting",{
        title:"Room Listings",
        headinginfo: "Room Listing",
        
    })
});
app.get("/signup",(req,res)=>{
    res.render("signup",{
        title:"Signup",
        headinginfo: "Signup",
        
    })
});
app.get("/login",(req,res)=>{
    res.render("login",{
        title:"Login",
        headinginfo: "Login",
        
    })
});
app.get("/welcome",(req,res)=>{
    res.render("welcome",{
        title:"Welcome",
        headinginfo: "Welcome",
        
    })
});
// app.get("/sendMessage",(req,res)=>{
//     res.render("form",{
//         title:"SMS Page"
//     });
    
// });
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'singh19m94@gmail.com',
      pass: 'fengles1994!'
    }
  });
app.post("/login",(req,res)=>{
    const errors= [];
   

  if(req.body.uname=="")
  {
    errors.push("Sorry, you must enter your Username")
  }
  if(req.body.psw=="")
  {
      errors.push("enter your password")
  }


  if(errors.length > 0)
  {
    res.render("login",{
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
        to: 'mig1994.prabh@gmail.com',
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
         body: `Welcome ${req.body.first_name} ${req.body.last_name} back to Airbnb. Rooms at your fingertips`,
         from: '+12078020196',
         to: `+14373881668`
       })
      .then(message => {
        console.log(message.sid);
        res.render("welcome");
      })
      .catch((err)=>{
          console.log(`Eror ${err}`);
      })
      
  }
    


});







app.post("/signup",(req,res)=>{
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
        to: 'mig1994.prabh@gmail.com',
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
         to: `+14373881668`
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
const PORT = process.env.PORT || 3000;
app.listen(3000,()=>{
console.log(`web serve is up and running`);
})