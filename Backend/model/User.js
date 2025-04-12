const mongoose =require("mongoose");

const Userschema= new mongoose.Schema({
    task: String,
    

});

const User= mongoose.model("User",Userschema);

module.exports= User;
