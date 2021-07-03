
const mongoose = require('mongoose');
const url = "mongodb+srv://phanvandat:phanvandat123@cluster0.8vzkn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./product.model');