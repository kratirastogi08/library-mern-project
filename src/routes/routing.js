const express=require('express')
const routing=express.Router()
const Book=require('../model/bookModel')

routing.get('/getAllBooks',async(req,res,next)=>{
    try{
        const books= await Book.find({}) 
        if(books && books.length>0) 
        {
            res.json({success:true,books})
            res.status(200)
        }
        else
        {
            let err=new Error("failed")
            err.status=404
            throw err;
        }
      
    }
    catch(error)
    {
        next(error)
    }

})
routing.get('/getBookById/:id',async(req,res,next)=>{
    try{
        const book= await Book.findById(req.params.id)
        if(book) 
        {
            res.json({success:true,book})
            res.status(200)
        }
        else
        {
            
        
            let err=new Error("not found")
            err.status=404
            throw err;
        
        }
      
    }
    catch(error)
    {
        next(error)
    }

})
routing.put('/updateBook/:id',async(req,res,next)=>{
    try{
        
          const modifiedBook= await Book.findByIdAndUpdate(req.params.id,req.body,{
                new:true,
                runValidators:true
            })
            
        res.json({success:true,modifiedBook,message:"Book Updated successfully"})
        res.status(200)
      
    }
    catch(error)
    {
        next(error)
    }

})
routing.delete('/deleteBook/:id',async(req,res,next)=>{
    try{
        
        const book= await Book.findById(req.params.id)
        if(book) 
        {  await book.remove()
            res.json({success:true})
            res.status(200)
        } 
        else
        {
            let err=new Error("not found")
            err.status=404
            throw err;
        }
      
    }
    catch(error)
    {
        next(error)
    }

})
routing.post('/addBook',async(req,res,next)=>{
    try{
        
        const book= await Book.create(req.body)
        if(book) 
        {  
            res.json({success:true,book,message:"Book added successfully"})
            res.status(200)
        } 
        else
        {
            let err=new Error("failed")
            err.status=404
            throw err;
        }
      
    }
    catch(error)
    {
        next(error)
    }

})
module.exports=routing;