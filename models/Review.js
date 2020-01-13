const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  bookId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'book'
  },
  userName: {
    type:String
  },
  rating:{
    type:String,
    required:true
  },
  content:{
    type:String
  },
  date:{
    type:Date,

  },


})

module.exports = mongoose.model('review', ReviewSchema)