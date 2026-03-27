const { default: mongoose } = require("mongoose")

const validateReturnBook=function (req , res , next) {
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({success:false , message:"Invalid book ID"})
    }
    next()

}

module.exports={validateReturnBook}