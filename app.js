const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose')
const routes = require('./routes.js')
app.use('/', require('./routes'));

app.use(express.json());




app.get('/',routes);

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