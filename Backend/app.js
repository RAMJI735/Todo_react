const express= require("express");
const app= express();
const mongoose= require("mongoose");
const mongodb = require("./database");
const cors= require("cors");
const User = require("./model/User");
mongodb();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.get("/",async(req,res)=>{
 let data= await User.find({});
 res.status(200).send(data);

});

app.post("/add",async(req,res)=>{
let {task}= req.body;
// console.log(req.body);
let addtask= new User({task: task});
let gettask = await addtask.save()
console.log(gettask);
res.status(200).json({"success": "true", "msg": "task added"});
})

app.delete("/:id/delete",async(req,res)=>{
    let data= await User.findByIdAndDelete(req.params.id);
    
    console.log(data)
    res.status(200).json({"success":"true","msg":"Data Deleted"})
})


app.put("/edit/:id",async(req,res)=>{
    try {
        let {task}=req.body;
        let update= await User.findByIdAndUpdate(req.params.id, {task:task});
        let response= await update.save();
        res.status(200).json({"success":"true","msg":"Task Updated"});
    
    } catch (error) {
        res.status(500).json({"success":"false","err":error});
    }
 
})
app.listen(8080,(req,res)=>{
    console.log("Server started");
})