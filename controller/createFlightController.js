const flightModuleModel = require("../models/flightModuleModel")

const createFlightController = async(req,res) =>{
    const {flight_number,departure_date,departure_time,status} = req.body
    try{
          const response = await flightModuleModel.create({flight_number,departure_date,departure_time,status})
          if(response){
              res.status(200).json({"msg":"Flight module created","data":response})
          }else{
            return res.status(200).json({"msg":"Flight module not created","data":response})
          }
    }catch(err){
         return res.status(400).json({"msg":"something went wrong","data":err})
    }
}

module.exports = createFlightController