const validateBookForCreateion=function (req , res , next) {
    const {title , isbn , authors }=req.body

    if(!title || typeof title !== "string"){
        return res.status(400).json({success:false , message:"Title is required and must be a string "})
    }
    if(!isbn || typeof isbn !== "string"){
        return res.status(400).json({success:false , message:"ISBN is required and must be a string"})
    }
    if(!authors || !Array.isArray(authors)){
        return res.status(400).json({success:false , message:"Authors is required and must be an array"})
    }
    next()

}

const validateBookForUpdate=function (req , res , next) {
    const {title , isbn , authors }=req.body
    if(title !== undefined && typeof title !== "string"){
        return res.status(400).json({success:false , message:"Title is required and must be a string "})
    }
    if(isbn !== undefined && typeof isbn !== "string"){
        return res.status(400).json({success:false , message:"ISBN is required and must be a string"})
    }
    if(authors !== undefined && !Array.isArray(authors)){
        return res.status(400).json({success:false , message:"Authors is required and must be an array"})
    }
    next()
}

module.exports={validateBookForCreateion , validateBookForUpdate}