const express = require('express');
const app = express();
const {body,validationResult} = require('express-validator');

const User = require("../models/User");


exports.register = (req,res) =>{

	//res.send("xxxx"+req.body.name)

	try{
		body('username').isLength({min:5});

		const newUser = new User({
			username:req.body.username,
			email:req.body.email,
			password:req.body.password
		});
		newUser.save((err, todo) => {
			if (err) {
			  res.send(err);
			}
			res.json(todo);
		  });

		// const user =  newUser.save();
		// res.status(200).json(user);

	}catch(err){

		res.status(500).json(err)



	}
}