const mongoose=require('mongoose')


const connection=()=>{
    mongoose.connect("mongodb://localhost:27017/Books",{useNewURLParser:true,useUnifiedTopology:true})
    .then((data)=>{
     console.log("Connected to server",data.connection.host)
    })
}

module.exports=connection