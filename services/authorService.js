const Author=require("../models/authorModel")

const createAuthor=async (authorData) => {
        const existingAuthor=await Author.findOne({name:authorData.name})
        if(existingAuthor){
            throw new Error("Author already exists")
        }
        const newAuthor=await Author.create(authorData)
        return newAuthor
}

const getallAuthors=async () => {
    const authors= await Author.find()
    return authors
}

const getSingleAuthor=async (id) => {
    const author=await Author.findById(id)
    if(!author){
        throw new Error("Author not found")
    }
    return author
}
const updateAuthor=async (id  , updateData) => {
        const author=await Author.findByIdAndUpdate(id , updateData , {new : true})
        if(!author){
            throw new Error("Author not found")}
        return author
        }


const deleteAuthor=async (id) => {
    const author=await Author.findByIdAndDelete(id)
    if(!author){
        throw new Error("Author not found")
    }
}



module.exports={createAuthor , getallAuthors , getSingleAuthor , updateAuthor , deleteAuthor}