const validateBorrowBook=function (req , res , next) {
    const {studentId , staffId , returnDate }=req.body
    if(!studentId || typeof studentId !== "string"){
        return res.status(400).json({success:false , message:"StudentId is required and must be a string "})
    }
    if(!staffId || typeof staffId !== "string"){
        return res.status(400).json({success:false , message:"Staff ID is required and must be a string "})
    }
    if(!returnDate || isNaN(Date.parse(returnDate))){
        return res.status(400).json({success:false , message:"ReturnDate is required and must be a valid date "})
    }
    next()

}
module.exports={validateBorrowBook}