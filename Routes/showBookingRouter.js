const Router = require("express")


const showBookingsController = require("../controller/showBookingsController")
const router = Router()

router.get("/",showBookingsController)

module.exports = router