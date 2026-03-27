const  validateAuthorForCreateion=function (req , res , next) {
    const {name , bio}=req.body

    if(!name || typeof name !== "string"){
        return res.status(400).json({success:false , message:"Name is required and must be a string "})
    }

    if(!bio || typeof bio !== "string"){
        return res.status(400).json({success:false , message:"Bio is required and must be a string"})
    }
    next()
}


const validateAuthorForUpdate=function (req , res , next) {
    const {name , bio}=req.body

    if(name !== undefined && typeof name !== "string"){
        return res.status(400).json({success:false , message:"Name is required and must be a string "})
    }

    if(bio !== undefined && typeof bio !== "string"){
        return res.status(400).json({success:false , message:"Bio is required and must be a string"})
    }
    next()
}

module.exports={validateAuthorForCreateion , validateAuthorForUpdate}