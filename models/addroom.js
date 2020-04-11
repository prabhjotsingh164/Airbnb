const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = new Schema({
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


const roomModel = mongoose.model('room', room);

module.exports = roomModel;