const Booking = require('../models/bookingModel'); 
const showBookingsController = async(req,res) =>{
        try {
            
          const results = await Booking.aggregate([
            // room model join
            {
              $lookup: {
                from: "rooms",            // the collection to join (matches the Room model)
                localField: "room_code",   // the field from Booking to match
                foreignField: "room_code", // the field from Room to match
                as: "roomDetails"          // the name of the new array field
              }
            },
            { $unwind: "$roomDetails" },    // unwinds the roomDetails array if only one room per booking

            //flight model join
            {
              $lookup: {
                from: "createflightmodulemodels",   
                localField: "flight_number",      // Match 'user_id' from 'Booking'
                foreignField: "flight_number",        // Match '_id' from 'users'
                as: "flightDetails"           // Store the result in 'userDetails'
              }
            },
            { $unwind: "$flightDetails" }  
          ]);
           
          res.json(results);
        } catch (err) {
          res.status(500).json({ error: err.message });
        }
    
}

module.exports = showBookingsController