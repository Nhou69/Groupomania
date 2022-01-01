const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post-controller');
//const auth = require('../middleware/auth');
//const limit = require('../middleware/limit');

router.post('/', postCtrl.newPost);
//router.get('/:id',  postCtrl.getOnePost);
//router.get('/',  postCtrl.getAllPost);
//router.put('/:id',  postCtrl.modifyPost);
//router.delete('/:id',  postCtrl.deletePost);

module.exports = router;