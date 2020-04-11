const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookedroom = new Schema({
  
  userId:
  {
    type:String,
    required:true
  },
  
    roomId:
  {
    type:String,
    required:true
  },
  
    title:
  {
      type : String,
      required : true
  },
  description:
  {
      type:String,
      required:true
  },
  price:
  {
      type:String,
      required:true
  },
  location:
  {
    type:String,
    required:true
  },
  from:
  {
    type:Date,
    required:true
  },
  to:
  {
    type:Date,
    required:true
  },
  
  roomimage:
  {
      type:String,
      required:true
  }
  
});


const broomModel = mongoose.model('bookedRoom', bookedroom);

module.exports = broomModel;