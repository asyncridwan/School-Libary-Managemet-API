const validateAttendantForCreateion=function (req , res , next) {
    const {name , staffId}=req.body

    if(!name || typeof name !== "string"){
        return res.status(400).json({success:false , message:"Name is required and must be a string "})
    }

    if(!staffId || typeof staffId !== "string"){
        return res.status(400).json({success:false , message:"Staff ID is required and must be a string"})
    }
    next()
}



module.exports={validateAttendantForCreateion }