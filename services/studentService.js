const Student=require("../models/studentModel")

const createStudent=async (userData) => {
    const existingStudent = await Student.findOne({name:userData.name})
    if(existingStudent){
        throw new Error("Student already exists")
    }
    const student=await Student.create(userData)
    return student
}

const getAllStudent=async () => {
    const students=await Student.find()
    return students
}

const getSingleStudent=async (id ) => {
    const student=await Student.findById(id)
    if(!student){
        throw new Error("Student not found")
    }
    return student
}

module.exports={createStudent , getAllStudent , getSingleStudent}