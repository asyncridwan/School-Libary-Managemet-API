const studentService=require("../services/studentService")

const createStudent=async (req , res , next) => {
    try {
        const student=await studentService.createStudent(req.body)
        res.status(201).json({success:true , data:student})
    } catch (error) {
        next(error)
    }
}

const getAllStudent=async (req , res , next) => {
    try{
        const students=await studentService.getAllStudent()
        res.status(200).json({success:true , data:students})
    }catch(error){
        next(error)
    }
}

const getSingleStudent=async (req , res , next) => {
    try {
        const student=await studentService.getSingleStudent(req.params.id)
        res.status(200).json({success:true, data:student})
    } catch (error) {
        next(error)
    }
}


module.exports={createStudent , getAllStudent , getSingleStudent }