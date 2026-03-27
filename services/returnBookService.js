const Book=require("../models/bookModel")


const returnBook =async (bookId) => {
    const book=await Book.findById(bookId)
    if(!book){
        throw new Error("Book not currently borrowed")
    }
    if(book.status === "IN"){
        throw new Error("Book is not currently borrowed")
    }

    book.status="IN"
    book.borrowedBy=null
    book.issuedBy=null
    book.returnDate=null

    await book.save()

    const updatedBook =await Book.findById(bookId)
    .populate("authors")

    return updatedBook
}

module.exports= {returnBook}