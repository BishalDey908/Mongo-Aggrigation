require("dotenv").config()
const express = require("express")
const app = express()
require("./db")
const roomRouter = require("./Routes/roomRoutes")
const bookingController = require("./controller/bookingController")
const showBookingsController = require("./controller/showBookingsController")


 // assuming Booking is in models folder



app.use(express.json())

app.use("/room",roomRouter)
app.use("/book",bookingController)



app.get('/showbookings',showBookingsController )

app.listen(process.env.PORT,()=>{
    console.log("server is running on port 3000")
})