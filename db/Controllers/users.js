
const User = require('../Models/User');

const gravatar = require ('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("config");

// /partie imagea:
 const mv = require('mv')
// const Media = require('../Models/Media');
// const User = require('../Models/User');
const  uuid  = require('uuid').v4;


//GET :  RETURN ALL USERS :

const findUsers= async(req, res)=>{
    const returnUser = await User.find({_id: req.user.user.id});
    return res.send(returnUser)
}




// POST :  ADD A NEW USER TO THE DAnpm TABASE :
//partie ajout de check  element n'a pas fionctioner on va travailler su le cote front de notre appli , 
//maintenat nous avons la partiee registre

// POST :  ADD A NEW USER TO THE DATABASE :

const createUser = async  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
   


 const {name ,lastName, email , password} = req.body 
 try{
//   //see i fuser exists:
   let user = await User.findOne({email});
   if(user){
    return  res.status(400).json({errors :[{msg:'user alredy exist'}]});

   }
  
  
// // //get user gravtar:
  const avatar = gravatar.url(email,{
    s:'200',
    r:'pg',
    d:'mm'
  })

// // //create an instance of the user :
  user = new User({
    name,email,avatar,password,lastName
  });
// // //encrypt password hash the password 
  const salt = await bcrypt.genSaltSync(10);
  user.password = await bcrypt.hash(password , salt);
  //  const savedUser=
    await user.save();
    // res.json(savedUser);
    // res.send('user registered')
// //return jsonwebtoken : 
 const payload = {
        user: {
          id: user.id,
        },
      };
      //Create token for usuer with id the payload

      jwt.sign(
        payload,
        config.get("jwtSecret"),
       
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

}catch(err){
   //something goen wron git's becose of the server
   console.error(err.message);
   res.status(500).send('Server error')
 }   }
   



   //PUT : EDIT A USER BY ID 
// const findandUpdate = async ( req , res)=>{
// const updatedPerson = await Person.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
// return res.send(updatedPerson)
// }


  //   DELETE : REMOVE A USER BY ID 
//   const deleteUser = async (req,res)=>{
//     const deltedPerson = await Person.findByIdAndRemove({_id:req.params.id});
//     return res.send(deltedPerson)
// }
module.exports = {
     findUsers,
   createUser,
    // findandUpdate,
    // deleteUser
}