const validateStudentForCreateion=function (req , res , next) {
    const {name , email}=req.body

    if(!name || typeof name !== "string"){
        return res.status(400).json({success:false , message:"Name is required and must be a string "})
    }

    if(!email || typeof email !== "string"){
        return res.status(400).json({success:false , message:"Email is required and must be a string"})
    }
    next()
}

module.exports={validateStudentForCreateion}