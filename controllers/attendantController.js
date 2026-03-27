const attendantService=require("../services/attendantServices")

const createAttendant=async (req , res ,next ) => {
    try{
    const attendant=await attendantService.createAttendant(req.body)
    res.status(201).json({success:true , data:attendant})
    }catch(error){
        next(error)}
    }

    const getallAttendant=async(req , res , next)=>{
        try{
            const attendants=await attendantService.getallAttendant()
            res.status(200).json({success:true , data:attendants})
        }catch(error){
            next(error)
        }
    }

    module.exports={ createAttendant , getallAttendant}