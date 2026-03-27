const express=require("express")
const attendantController=require("../controllers/attendantController")
const validateAttendant=require("../middleware/validateAttendant")

const router=express.Router()
router.post("/attendants", validateAttendant.validateAttendantForCreateion, attendantController.createAttendant)
router.get("/attendants", attendantController.getallAttendant)

module.exports = router 