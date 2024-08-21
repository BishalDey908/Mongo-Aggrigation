const Router = require("express")
const createFlightController = require("../controller/createFlightController")
const router = Router()

router.post("/",createFlightController)

module.exports=router