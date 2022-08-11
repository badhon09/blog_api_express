const express = require('express');
const app = express.Router();
var login = require('./controllers/LoginController.js');
var users = require('./controllers/UserController.js');
const router 		= express.Router();


//login routes
router.get('/login',login.list);

//users 
router.post('/register',users.register);


//home route
router.get('/',(req,res)=>{
	res.send("node app");
});




module.exports = router;