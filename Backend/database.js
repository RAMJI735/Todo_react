const mongodb= async()=>{
 await require("mongoose").connect(YOUR-DB);
 console.log("Db is connected");
}

module.exports= mongodb;
