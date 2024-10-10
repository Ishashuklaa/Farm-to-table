const express = require('express');
const { createUser, loginUser } = require('../controller/User.controller');
const router = express.Router(); 

router.route('/createUser').post(createUser);
router.route('/login').post(loginUser);
module.exports = router; 
