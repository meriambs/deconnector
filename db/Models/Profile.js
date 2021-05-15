
// ****-Create a person having this prototype:-****
let mongoose = require("mongoose");

//Create a person having this prototype:
let profilSchema = new mongoose.Schema({
 user:{
   type:mongoose.Schema.Types.ObjectId,
   ref:'user'
 },
 phonenumber:Number,
 age: Number,
 password:{
   type:String,
   required:true
 },
 company:{
   type:String,
 },
 location:{
   type:String,
 },
 githubUser:{
   type:String,
 },
 webSite:{
   type:String,
 },
 LastDeploma:{
   type:String,
 },
 LinkedIn:{
  type:String,
},
status:{
  type:String,
},
twitter:{
  type:String,
},

});

module.exports = Profile = mongoose.model("profile", profilSchema);