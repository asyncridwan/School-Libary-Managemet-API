const bookService=require("../services/bookServices")

const createBook=async (req , res ,next ) => {
    try {
        const book=await bookService.createBook(req.body)
        res.status(201).json({sucess:true , data: book})
    } catch (error) {
        next(error)
    }
}

const getallBooks=async (req , res , next) => {
    try {
        const books=await bookService.getallBooks()
        res.status(200).json({sucess:true , data:books})
    } catch (error) {
        next(error)
    }
}

const getSingleBook=async (req , res , next ) => {
    try {
        const book=await bookService.getSingleBook(req.params.id)
        res.status(200).json({sucess:true , data:book})
    } catch (error) {
    next(error)
    }
}

const updateBook=async (req , res , next)=>{
    try {
        const updatedBook=await bookService.updateBook(req.params.id , req.body)
        res.status(200).json({sucess:true , data:updatedBook})
    } catch (error) {
        next(error)
    }
}

const deleteBook=async (req , res , next ) => {
    try {
        const deletedBook=await bookService.deleteBook(req.params.id)
        res.status(200).json({success : true , data:deletedBook})
    } catch (error) {
        next(error)
    }
}

const getOverdueBooks=async (req , res , next) => {
    try {
        const overdueBooks=await bookService.getOverdueBooks()
        res.status(200).json({success:true , data:overdueBooks})
    }catch(error){
        next(error)
    }
}
module.exports={createBook , getallBooks , getSingleBook , updateBook , deleteBook , getOverdueBooks}