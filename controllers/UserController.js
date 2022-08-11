const User = require("../models/User");


exports.register = async(req,res) =>{

	res.send("nameeeee"+req.body.username)

	try{

		const newUser = new User({
			username:req.body.username,
			email:req.body.email,
			password:req.body.password
		});

		const user = await newUser.save();
		res.status(200).json(user);

	}catch(err){

		res.status(500).json(err)



	}
}