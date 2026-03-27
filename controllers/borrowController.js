const borrowServices=require("../services/borrowBookService")

const borrowBook=async (req , res , next ) => {
    try{
        const book=await borrowServices.borrowBook(req.params.id , req.body)
        res.status(200).json({sucess:true , data:book})
    }catch(error){
        next(error)
    }
}

module.exports={borrowBook}