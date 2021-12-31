const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user-controller');
//const auth = require('../middleware/auth');
//const limit = require('../middleware/limit');

router.post('/signup', userCtrl.signup);
//router.post('/login',  userCtrl.login);

module.exports = router;