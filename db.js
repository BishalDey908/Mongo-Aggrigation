const mongoose = require("mongoose")
mongoose.connect(process.env.DB_Conntection)
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})