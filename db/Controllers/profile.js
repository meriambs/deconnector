const { request } = require('express');
const Profile = require('../Models/Profile');
const Profil = require('../Models/Profile');
const User = require('../Models/User');
//GET :  RETURN ALL USERS :

const findProfil= async(req, res)=>{
  try{
    const returnUser = await Profile.findOne({user:req.user.id}).populate('user',['name','avatar']);
 
 if(!returnUser){
   return res.status(400).json({msg:'there is no profile for this user'})
 }
 res.json(returnUser);
  }catch(error){
     console.error(error.message)
    res.status(500).send('server error'); 
  
  }
}


// POST :  ADD A NEW USER TO THE DATABASE :

 const createProfile = async (req, res) => {
   const {
     company,
     webSite,
     location,
     githubUser,
     twitter,
     LinkedIn,
     LastDeploma,
     status
   }=req.body;

   //build profile object:
   const profilefiled={};
   profilefiled.user= req.user.id;
   if(company)profilefiled.company=company;
   if(webSite)profilefiled.webSite=webSite;
   if(location)profilefiled.location=location;
   if(githubUser)profilefiled.githubUser=githubUser;
   if(twitter)profilefiled.twitter=twitter;
   if(LinkedIn)profilefiled.LinkedIn=LinkedIn;
   if(LastDeploma)profilefiled.LastDeploma=LastDeploma;
   if(status)profilefiled.status=status;
   //ici les parties 
//      console.log('req.body',req.body)
//  const persons = new User(req.body);
//  const t = await persons.save()
try{
let profile = await  Profile.findOne({user:req.user.id})
if(profile){
profile = await Profile.findOneAndUpdate ({user :req.user.id},{$set:profilefiled},{new:true})

return res.json(profile)
}
//naw we create things 
profile = new Profile(profilefiled);
await profile.save();
return res.json(profile);

}catch(error){
  console.error(error.message);
  res.status(500).send('server error')
}
 }
// get all profiles 
const getProfile = async(req, res)=>{
try{
const profiles = await Profile.find().populate('user',['name','avatar']);
res.json(profiles);
}catch(error){
  console.error(error.message);
  res.status(500).send('server error')
}
}
//get profile by id user:
const getProfilebyId =async(req,res)=>{
  try{
    const profil = await Profile.findOne(
      {user:req.params.user_id
      }).populate('user',['name','avatar']);
    
   if(!profil)
    return res.status(400).json({msg:'there is no profile for this user'});
    
    res.json(profil);

    }catch(error){
      console.error(error.message);
      if(error.kind == 'ObjectId'){
        return res.status(400).json({msg:'profile not foiunbd'});
      }
      res.status(500).send('server error')
    }
}

   //PUT : EDIT A USER BY ID 
// const findandUpdate = async ( req , res)=>{
// const updatedPerson = await Person.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
// return res.send(updatedPerson)
// }


  //   DELETE : REMOVE A USER BY ID 
   const deleteProfile = async (req,res)=>{
// if we wanna deleat the user 
     try{

      // if you want dealt profile 
      await Profile.findOneAndRemove({user :req.user.id});
      await User.findOneAndRemove  ({_id:req.user.id});
      
  res.json({msg:'use delete'})
     }
     catch(error){
      console.error(error.message);
      res.status(500).send('server error')
     }
 
 }

 const giuserName = async(req, res)=>{
   try{
  const option = {
uri:`https://api.github.com/users/${req.params.username}/repos?per_page=5&sprt=created:asc&client_id=${config.get('githubClientId')}$client_secret=${config.get('githubSecret')}`,
method: 'GET',
headers:{'user-agent':'node.js'}
  }
  request(option,(error, response, body)=>{
    if(error)console.error(error.message);
    if (response.statusCode !== 200){
      res.status(404).json({msg:'nbo github'})
    }
    res.json(JSON.parse(body))
  })
  res.json(option); 

   }catch(error){
     console.error(error.message);
     res.status(500).send('server error')
   }
 }
module.exports = {
    findProfil,
    createProfile,
    getProfile,
    getProfilebyId,
    deleteProfile,
    giuserName
}