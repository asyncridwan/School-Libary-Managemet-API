const Attendant=require("../models/attendantModel")
const bcrypt=require("bcrypt")

const createAttendant=async (userData) => {
    if(!userData.password || userData.password.length < 6){
        throw new Error("Password must be at least 6 characters long")
    }
    if(!userData.staffId || typeof userData.staffId !== "string"){
        throw new Error("StaffId is required and must be a string")
    }
    const existingAttendant= await Attendant.findOne({name:userData.name})
    if(existingAttendant){
        throw new Error("Attendant already exists")
    }
    const existingStaffId= await Attendant.findOne({staffId:userData.staffId})
    if(existingStaffId){
        throw new Error("StaffId already exists")
    }
    const hashedPassword=await bcrypt.hash(userData.password , 10)
    const attendantData={...userData , password:hashedPassword}
    const attendant=await Attendant.create(attendantData)
    return attendant
}

const getallAttendant=async () => {
    const attendants=await Attendant.find()
    return attendants
}

module.exports={createAttendant,getallAttendant}
