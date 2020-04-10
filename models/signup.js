const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const signup = new Schema({
  email:
  {
      type : String,
      required : true
  },
  first_name:
  {
      type:String,
      required:true
  },
  last_name:
  {
      type:String,
      required:true
  },
  password:
  {
    type:String,
    required:true
  },
  mobile:
  {
    type:String,
    required:true
  },
  bday:
  {
     type:Date,
     required:true 
  },
  dateCreated:
  {
      type:Date,
      default:Date.now()
  },
  type:
  {
    type:String,
    default:"user"
  }
});


signup.pre("save",function(next)
{
bcrypt.genSalt(10)
.then((salt)=>{
  
  bcrypt.hash(this.password,salt)
  .then((encryptPassword)=>
  {
    this.password = encryptPassword;
    next();

  })
  .catch(err=>console.log(`Error occured when hashing${err}`));
})
.catch(err=>console.log(`Error occured when salting${err}`));



})

const signupModel = mongoose.model('signup', signup);

module.exports = signupModel;