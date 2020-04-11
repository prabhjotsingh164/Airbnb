const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const session = require('express-session');

require("dotenv").config({path:'./config/keys.env'});


const app = express();


//This allows express to make staic content available from the public
app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

const indexController = require("./controllers/index");
const roomController = require("./controllers/rooms");
const loginController = require("./controllers/login");
const signupController = require("./controllers/signup");
const welcomeController = require("./controllers/welcome");
const adminController = require("./controllers/admin");
//This tells express to set and register handlebars as its template/viewengine






app.use(session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true,
    
  }))

  app.use((req,res,next)=>{
      
    res.locals.user = req.session.userInfo;
    
    
    next();
  })

app.use(fileUpload());

app.use((req,res,next)=>{
  if(req.query.method=="PUT")
  {
      req.method="PUT"
  }
  else if(req.query.method=="DELETE")
  {
      req.method ="DELETE"
  }
  next();
});


app.use("/",indexController);
app.use("/room-listing",roomController);
app.use("/login",loginController);
app.use("/signup",signupController);
app.use("/welcome",welcomeController);
app.use("/admin",adminController);





mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING , {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB Database`);
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));





const PORT = process.env.PORT;
app.listen(PORT,()=>{
console.log(`web serve is up and running`);
})