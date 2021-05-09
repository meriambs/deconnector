var express = require('express');
var router = express.Router();
const { findProfil,createProfile,getProfile,getProfilebyId,deleteProfile,giuserName} = require('../Controllers/profile');
const auth = require('../middleware/auth');
const request = require('request');
const config = require('config');
/* GET users listing. */
 router.post('/',auth, createProfile);

/* GET users listing. */
  router.get('/me',auth, findProfil);
  // router.get('/:id', findProfil);
// get al profile :

router.get('/', getProfile)
// // // get by user id :
router.get('/user/:user_id',getProfilebyId)

// router.put('/name/:name',findandUpdate);
// router.put('/:id',updateUser);

// // //delete
// router.delete('/multi',findandRemove);
  router.delete('/',auth,deleteProfile);
// // // chain Search query:
// router.post('/querychain',findQuery);

// get user github name 

router.get('/github/:username',auth,giuserName)
module.exports = router;
