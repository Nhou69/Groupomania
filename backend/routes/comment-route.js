const express = require('express');
const router = express.Router();
const commentCtrl = require('../controllers/comment-controller');
//const auth = require('../middleware/auth');
//const limit = require('../middleware/limit');

router.post('/', commentCtrl.newComment);
router.get('/:id',  commentCtrl.getOneComment);
router.get('/post/:post_id',  commentCtrl.getAllComment);
router.put('/:id',  commentCtrl.modifyComment);
router.delete('/:id',  commentCtrl.deleteComment);

module.exports = router;