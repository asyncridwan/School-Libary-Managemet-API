const Attendant = require("../models/attendantModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const loginAttendant = async (staffId, password) => {
    const attendant = await Attendant.findOne({ staffId })
    if (!attendant) {
        throw new Error("Attendant not found")
    }
    const isMatch = await bcrypt.compare(password, attendant.password)
    if (!isMatch) {
        throw new Error("Invalid password")
    }
    const token = jwt.sign({ id: attendant._id, staffId: attendant.staffId }, process.env.JWT_SECRET || 'defaultsecret', { expiresIn: '1h' })
    return token
}

module.exports = { loginAttendant }