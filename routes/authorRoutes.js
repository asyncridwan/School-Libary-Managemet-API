const express=require("express")
const authorController=require("../controllers/authorController")
const validateAuthor=require("../middleware/validateAuthor")
const router=express.Router()

router.post("/authors" ,validateAuthor.validateAuthorForCreateion , authorController.createAuthor)
router.get("/authors" , authorController.getallAuthors)
router.get("/authors/:id" , authorController.getSingleAuthor)
router.put("/authors/:id" ,validateAuthor.validateAuthorForUpdate, authorController.updateAuthor)
router.delete("/authors/:id" , authorController.deleteAuthor)

module.exports=router