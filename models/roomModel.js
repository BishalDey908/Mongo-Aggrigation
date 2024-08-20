const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  room_name: String,
  room_code: Number,
  capacity: Number,
  gender: String,
  status: String
});

const roomModel = mongoose.model('Room', roomSchema);
module.exports = roomModel