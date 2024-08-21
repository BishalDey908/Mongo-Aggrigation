const mongoose = require('mongoose');

const bookingSchema =  mongoose.Schema({
    name: String,
    email_address: String,
    gender: String,
    select_flight: String,
    room_code: Number,
    flight_number:Number
  });
  
  const bookingModel = new mongoose.model('Booking', bookingSchema);
  

  module.exports =bookingModel