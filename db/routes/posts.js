var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const {findPost ,getPosts,getPostsidii,  likePost,  deletePost, commentPost ,deleteComment} = require('../Controllers/posts');
const Post = require('../Models/Post');
const User = require('../Models/User');
const Profile = require('../Models/Profile'); 
/* GET users listing. */
// router.post('/', createUser);

/* post users listing. */
 router.post('/', auth,findPost);
// router.get('/:id', findUsers);
/*get posts */
router.get('/',auth,getPosts)
// // // get post selon el id 
router.get('/:id',auth,getPostsidii)

// router.put('/name/:name',findandUpdate);
// router.put('/:id',updateUser);

// // //delete
// router.delete('/multi',findandRemove);
  router.delete('/:id',auth,deletePost);
// // // chain Search query:
//like comment 
router.post('/like/:id',auth,likePost);
//commentaire :
 router.post('/comment/:id',auth,commentPost);
 //thi s one is to deletre the comment part :
 router.delete('/comment/:id/:comment_id',auth,deleteComment)
// router.post('/querychain',findQuery);
module.exports = router;
