const Router = require("express")
const roomController = require("../controller/roomController")
const router = Router()

router.post("/",roomController)

module.exports = router