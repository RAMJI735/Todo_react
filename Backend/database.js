const mongodb= async()=>{
 await require("mongoose").connect("mongodb+srv://dipanshusrivastava735:deepanshu123@cluster0.j0x2swe.mongodb.net/CURD");
 console.log("Db is connected");
}

module.exports= mongodb;