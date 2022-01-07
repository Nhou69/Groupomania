const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user-controller');
const auth = require('../middleware/auth');
//const limit = require('../middleware/limit');

router.post('/signup', userCtrl.signupUser);
router.post('/login', userCtrl.loginUser);
router.get('/:id',  userCtrl.getOneUser);
router.get('/',  userCtrl.getAllUser);
router.put('/:id',  userCtrl.modifyUser);
router.delete('/:id',  userCtrl.deleteUser);

module.exports = router;