var express = require('express');
var app = express();
var path = require('path');

let router = express.Router();
var bodyParser= require('body-parser');
app.use(bodyParser());
var mongoose = require('mongoose');

mongoose.connect('mongodb://harshDB:db12345@ds161700.mlab.com:61700/flight-server', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
});


app.listen(3500,function(){
    console.log('server is runnig on port 3000');
});