const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const froom = new Schema({
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
  roomimage:
  {
      type:String
  }
  
});


const froomModel = mongoose.model('froom', froom);

module.exports = froomModel;