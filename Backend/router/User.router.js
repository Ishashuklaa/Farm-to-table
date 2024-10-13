const express = require('express');
const { createUser, loginUser, forgotpassword, validateOtp, createAddress, getUser, updateUser } = require('../controller/User.controller');
const { authorization } = require('../middleware/authorization.middleware');
const router = express.Router(); 

router.route('/createUser').post(createUser);
router.route('/login').post(loginUser);
router.route('/forgotpassword').post(forgotpassword);
router.post('/verifying',authorization,validateOtp);
router.post('/createAddress', authorization,createAddress);
router.get('/GetUser', authorization,getUser);
router.post('/updateUser',authorization,updateUser);




module.exports = router; 
