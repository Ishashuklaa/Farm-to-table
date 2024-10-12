const express = require('express');
const { createUser, loginUser, forgotpassword, validateOtp } = require('../controller/User.controller');
const { authorization } = require('../middleware/authorization.middleware');
const router = express.Router(); 

router.route('/createUser').post(createUser);
router.route('/login').post(loginUser);
router.route('/forgotpassword').post(forgotpassword);
router.post('/verifying',authorization,validateOtp);
module.exports = router; 
