const express = require('express')
const mongoose = require('mongoose')
const router = express.Router();

const loginMethod = (req,res) => {
  res.send("hello"+req.body.name)
}






// router.post('/',loginMethod)
module.exports = {loginMethod}
    