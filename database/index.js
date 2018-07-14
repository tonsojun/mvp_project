// require mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const db = mongoose.connection;
db.once('open', function() {
  console.log('We have connection through mongoose!')
})

// define schema
let dogSchema = mongoose.Schema({
  _id: Number,
  username: String,
  dogname: String,
  message: String,
  photos: []
})

let dogPost = mongoose.model('DogPost', dogSchema); // creates schema

