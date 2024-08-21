const bookingModel = require("../models/bookingModel")


const bookingController = async(req,res) =>{
    const{name,email_address,select_flight,room_code,flight_number} = req.body
    try{
     const response = await bookingModel.create({name,email_address,select_flight,room_code,flight_number})
     res.status(200).json({"msg":"Success","data":response})
     
    }catch(err){
        res.status(400).json({"msg":"error","data":err})
    }
}

module.exports = bookingController