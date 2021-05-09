var express = require('express');
var router = express.Router();
const { sayauth, createAuth } = require('../Controllers/auth');
const auth = require ('../middleware/auth');
// const { body, validationResult } = require('express-validator');


/* GET home page. */
router.get('/',auth,sayauth);
//post 
router.post(
  '/',createAuth
);
module.exports = router;
