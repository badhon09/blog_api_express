const express = require('express');
var login = require('./controllers/LoginController.js');
const users = require('./controllers/UserController.js');
const router 		= express.Router();

//login routes
router.post('/login',login.loginMethod);

//users 
router.post('/register',users.register);


//home route
router.get('/',(req,res)=>{
	res.send("node app");
});




module.exports = router;