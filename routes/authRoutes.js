const express = require("express")
const routes = express.Router()

const authController = require("../controllers/authController")
routes.post("/login" , authController.loginAttendant)

module.exports = routes