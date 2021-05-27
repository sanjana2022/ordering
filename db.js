const mongoose =require("mongoose");

var mongoURL= 'mongodb+srv://sanjanasingh:hr035696@cluster0.u9olm.mongodb.net/foodorder'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db= mongoose.connection

db.on('connected', ()=>{
    console.log('Mongo DB Connection successful');
})

db.on('error', ()=>{
    console.log('Mongo DB Connection failed');
})

module.exports=mongoose