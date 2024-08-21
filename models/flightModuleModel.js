const mongoose = require("mongoose")
const flightModuleSchema = mongoose.Schema({
    flight_number: Number,
    departure_date: String,
    departure_time: String,
    status: String
})

const flightModuleModel = new mongoose.model("createFlightModuleModel",flightModuleSchema)

module.exports = flightModuleModel