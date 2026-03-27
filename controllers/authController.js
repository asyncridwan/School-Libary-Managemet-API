const authService=require("../services/authServices")

const loginAttendant=async (req , res , next) => {
    try {
        const { staffId , password }=req.body
        const token=await authService.loginAttendant(staffId , password)
        res.status(200).json({ message: "Login successful", token })
    } catch (error) {
        next(error)
    }
}

module.exports={ loginAttendant}