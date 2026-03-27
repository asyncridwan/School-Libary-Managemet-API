const returnServices=require("../services/returnBookService")

const returnBook=async (req , res , next) => {
    try {
        const book=await returnServices.returnBook(req.params.id)
        res.status(200).json({sucess:true , data:book})
    } catch (error) {
        next(error)
    }
}

module.exports={returnBook}