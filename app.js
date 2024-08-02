const mongoose=require("mongoose")
const cors=require("cors")
const express=require("express")
const bcrypt=require("bcryptjs")
const userModel = require("./models/user")
const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://jophine:jophinepaul@cluster0.oyyvgui.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0")



app.post("/userSignup",(req,res)=>{
    let input=req.body
    let hashedpassword=bcrypt.hashSync(input.password,12)
    //console.log(hashedpassword)
    input.password=hashedpassword
    console.log(input) 
    let result= new userModel(input)
    result.save()
    res.json({"status":"success"})
    
})


app.listen(8080,()=>{
    console.log("server started")
})