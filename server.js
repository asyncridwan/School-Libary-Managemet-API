require("dotenv").config()
const express=require("express")
const connectDB=require("./config/db")
const attendantRoutes=require("./routes/attendantRoutes")
const authorRoutes=require("./routes/authorRoutes")
const bookRoutes=require("./routes/bookRoutes")
const studentRoutes=require("./routes/studentRoutes")
const authRoutes=require("./routes/authRoutes")

const app=express()
connectDB()

app.use(express.json())
app.use("/attendant" ,attendantRoutes )
app.use("/author" , authorRoutes)
app.use("/book" , bookRoutes)
app.use("/student" , studentRoutes)
app.use("/auth" , authRoutes)

app.use((err , req , res , next )=>{
    const status = err.message.includes('duplicate') ? 400 : err.statusCode || 500
    res.status(status).json({
        success:false,
        message:err.message
    })
})

const PORT=process.env.PORT || 5000

app.listen(PORT , ()=>{
    console.log(`Server running on ${PORT}`)
})