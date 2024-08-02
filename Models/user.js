const mongoose=require("mongoose")
const userSchema = mongoose.Schema(
    {
        name:String,
        username:String,
        password:String
    }
)
const userModel = mongoose.model("userndata",userSchema)
module.exports=userModel