var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth')
const { createUser,findUsers,findandUpdate,deleteUser} = require('../Controllers/users');
// ...rest of the initial code omitted for simplicity.

//ramasser les fichiers 

/* GET users listing. */
  router.get('/', auth,findUsers);
// router.get('/:id', findUsers);
// router.post('/photo',auth,multipartMiddleware,uploadPhoto);
/* POST users listing. */

router.post('/',createUser );

// // update 

router.put('/:id',findandUpdate);

// //delete

  router.delete('/:id',deleteUser);

module.exports = router;