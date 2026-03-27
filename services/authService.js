const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Attendant = require("../models/attendantModel")

const createAttendant = async (attendantData) => {
    const { AttendantId, password } = attendantData
    const hashedPassword = await bcrypt.hash(password, 10)
    const attendant = new Attendant({
        AttendantId,
        password: hashedPassword
    })
    return await attendant.save()
}

const loginAttendant = async (attendantId, password) => {
    const attendant = await Attendant.findOne({ AttendantId: attendantId })
    if (!attendant) {
        throw new Error("Attendant not found")
    }
    const isMatch = await bcrypt.compare(password, attendant.password)
    if (!isMatch) {
        throw new Error("Invalid password")
    }
    const token = jwt.sign({ id: attendant._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
    return token
}

module.exports = { loginAttendant , createAttendant }

