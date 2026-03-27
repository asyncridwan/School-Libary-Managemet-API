const authorService=require("../services/authorService")

const createAuthor=async (req , res , next ) => {
    try{
        const author = await authorService.createAuthor(req.body)
        res.status(201).json({success :true , data:author})
    }catch(error){
        next(error)
    }
}

const getallAuthors=async (req , res , next ) => {
    try{
        const authors = await authorService.getallAuthors()
        res.status(200).json({success : true , data: authors})
    }catch(error){
        next(error)
    }
}

const getSingleAuthor=async(req , res , next ) => {
    try{
        const author=await authorService.getSingleAuthor(req.params.id)
        res.status(200).json({success : true , data : author})
    }catch(error){
        next(error)
    }
}

const updateAuthor=async(req , res , next ) => {
    try{
        const author=await authorService.updateAuthor(req.params.id , req.body)
        res.status(200).json({success : true , data:author})
    }catch(error){
        next(error)
    }
}

const deleteAuthor=async (req , res , next ) => {
    try{
        const author=await authorService.deleteAuthor(req.params.id)
        res.status(200).json({success : true , message:"Author deleted"})
    }catch(error){
        next(error)
    }
}

module.exports={createAuthor , getallAuthors , getSingleAuthor , updateAuthor , deleteAuthor}