const Booking = require('../models/bookingModel'); 
const showBookingsController = async(req,res) =>{
        try {
            
          const results = await Booking.aggregate([
            {
              $lookup: {
                from: "rooms",            // the collection to join (matches the Room model)
                localField: "room_code",   // the field from Booking to match
                foreignField: "room_code", // the field from Room to match
                as: "roomDetails"          // the name of the new array field
              }
            },
            { $unwind: "$roomDetails" }    // unwinds the roomDetails array if only one room per booking
          ]);
      
          res.json(results);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
    
}

module.exports = showBookingsController