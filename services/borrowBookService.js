const Book=require("../models/bookModel")
const Student= require("../models/studentModel")
const Attendant=require("../models/attendantModel")

const borrowBook=async (bookId , borrowData) => {
    const {studentId, staffId , returnDate }= borrowData
    
    if(!returnDate || isNaN(Date.parse(returnDate))){
        throw new Error("Valid returnDate is required")
    }
    
    const returnDateObj = new Date(returnDate)
    const currentDate = new Date()
    
    if(returnDateObj <= currentDate){
        throw new Error("returnDate must be in the future")
    }
    
    const book=await Book.findById(bookId)
    if(!book){
        throw new Error("Book not found")
    }
    if(book.status === "OUT"){
        throw new Error("Book is already Borrowed")
    }

    const student=await Student.findById(studentId)
    if(!student){
        throw new Error("Student not found")
    }

    const attendant=await Attendant.findById(staffId)
    if(!attendant){
        throw new Error("Attendant Not found")
    }

    book.status="OUT"
    book.borrowedBy=student._id
    book.issuedBy=attendant._id
    book.returnDate=returnDate


    await book.save()

    const updatedBook=await Book.findById(bookId)
    .populate("authors")
    .populate("borrowedBy")
    .populate("issuedBy")

    return updatedBook
}

module.exports={borrowBook}