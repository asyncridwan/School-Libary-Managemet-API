const express=require("express")
const studentController=require("../controllers/studentController")
const validateStudent=require("../middleware/validateStudent")

const router=express.Router()
router.post("/students" , validateStudent.validateStudentForCreateion , studentController.createStudent)
router.get("/students" , studentController.getAllStudent)
router.get("/students/:id" , studentController.getSingleStudent)


module.exports=router
