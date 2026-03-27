const express=require("express")
const authMiddleware=require("../middleware/authMiddleware")
const bookController=require("../controllers/bookController")
const validateBook=require("../middleware/validateBook")
const validateborrow=require("../middleware/validateBorrowBook")
const validatereturn=require("../middleware/validateReturnBook")
const borrowController=require("../controllers/borrowController")
const returnController=require("../controllers/returnController")

const router=express.Router()

router.post("/books" , validateBook.validateBookForCreateion , bookController.createBook)
router.get("/books" , bookController.getallBooks)
router.get("/books/overdue" , bookController.getOverdueBooks)
router.get("/books/:id" , bookController.getSingleBook)
router.put("/books/:id" , validateBook.validateBookForUpdate , bookController.updateBook)
router.delete("/books/:id" , bookController.deleteBook)
router.post("/books/:id/borrow" ,validateborrow.validateBorrowBook,authMiddleware, borrowController.borrowBook)
router.post("/books/:id/return" , validatereturn.validateReturnBook , authMiddleware, returnController.returnBook)

module.exports=router