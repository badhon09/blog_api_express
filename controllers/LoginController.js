const express = require('express');
const app = express();

const mongoose = require('mongoose')

var posts = [
  { title: 'Foo', body: 'some foo bar' },
  { title: 'Foo bar', body: 'more foo bar' },
  { title: 'Foo bar baz', body: 'more foo bar baz' }
];

exports.list = function(req, res){

  var a = mongoose.createCollection("Student");
res.send(a);

};




    