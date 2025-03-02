import mongoose from "mongoose"
const userSchema=mongoose.Schema({
  fullname:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  password:{
    type:String,
    require:true
  }
});
const user=mongoose.model("user",userSchema);
export default user;