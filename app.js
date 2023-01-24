const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
// const login = require('./controllers/LoginController');
const routes = require('./routes');
// app.use('/', require('./routes'));


// parse application/json
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
  );

 app.use('/',routes);


mongoose.connect('mongodb+srv://badhon_09:badhon09@cluster0.hyrvm.mongodb.net/blogExpress')
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log('Error connecting to database');
  });


app.listen(port,()=>{
  console.log(`app is running on port ${port}`)
});