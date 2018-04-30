// import files and packages up here
var express = require('express'); //notes: calling in the express library from installed express
var jsonData = require('./data.json');
var morgan = require('morgan');
// create your express server below
var app = express(); //an instance of express created using the "express()" function and names app 

// add your routes and middleware below
app.use(morgan('dev'));  // logs all traffic (all the "gets" from user to server)

app.get('/',function(req,res){ //everytime someone calls a "get", "send" text "It's Working."
    res.status(200).send("It's Working");
});

app.get('/data',function(req,res){ 
    res.send(jsonData);
});


// finally export the express application
module.exports = app;
