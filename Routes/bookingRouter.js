const Router = require("express")

const bookingController = require("../controller/bookingController")
const router = Router()

router.post("/",bookingController)

module.exports = router