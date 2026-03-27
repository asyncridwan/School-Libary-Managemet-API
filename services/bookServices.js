const Book=require("../models/bookModel")
const Author=require("../models/authorModel")

const createBook =async (bookData) => {
    const {authors, isbn} = bookData
    if(!authors || authors.length===0){
        throw new Error("An Author is required")
    }
    if(!isbn || typeof isbn !== "string" || isbn.length < 5){
        throw new Error("ISBN is required and must be valid")
    }
    const foundAuthors=await Author.find({
        _id:{$in : authors}
    })

    if(foundAuthors.length !== authors.length){
        throw new Error("An Author is invalid")
    }
    const existingBook =await Book.findOne({title:bookData.title})
    if(existingBook){
        throw new Error("Book already Exists")
    }
    const existingIsbn= await Book.findOne({isbn:bookData.isbn})
    if(existingIsbn){
        throw new Error("ISBN must be unique to a book")
    }
    const newbook=await Book.create(bookData)
    return newbook
}

const getallBooks=async () => {
    const books=await Book.find()
    return books
}

const getSingleBook=async (id) => {
    const book=await Book.findById(id)
    .populate("authors")
    .populate("borrowedBy")
    .populate("issuedBy")

    if(!book){
        throw new Error("Book not found")
    }
    return book
}

const updateBook=async (id , updateData) => {
    const {authors}= updateData

    if(authors && authors.length>0){
        const foundAuthors=await Author.find({
            _id:{$in : authors}
        })
        if(foundAuthors.length !== authors.length){
            throw new Error("Author ID is invalid")
        }
    }
    const updatedBook= await Book.findByIdAndUpdate(
        id , updateData , {new:true}).populate("authors")

    if(!updatedBook){
        throw new Error("Book not found")
    }
    return updatedBook
}
   
const deleteBook=async (id) => {
    const deletedBook=await Book.findByIdAndDelete(id)

    if(!deletedBook){
        throw new Error("Book not found")
    }
    return deletedBook
}

const getOverdueBooks=async () => {
    const currentDate= new Date()
    const overdueBooks=await Book.find({
        status:"OUT",
        returnDate:{$lt:currentDate}
    }).populate("borrowedBy").populate("issuedBy").populate("authors")
    return overdueBooks
}

module.exports={createBook , getallBooks , getSingleBook , updateBook , deleteBook , getOverdueBooks}