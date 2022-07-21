const {Schema}=require('mongoose')
const mongoose=require('mongoose')

const bookSchema=Schema({
    bookTitle:{
        type:String,
        required:[true,"title is required"]
    },
    author:{
        type:String,
        required:[true,"author is required"]
    },
    price:{
        type:Number,
        required:[true,"title is required"]
    }
})

module.exports=mongoose.model("Books",bookSchema)