const express = require('express');
const app = express();
const path = require('path');

let router = express.Router();
const bodyParser= require('body-parser');
app.use(bodyParser());
const mongoose = require('mongoose');

mongoose.connect('mongodb://harshDB:db12345@ds161700.mlab.com:61700/flight-server', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('connected');
    }
});

// Custom dependencies
const apiRoutes = require('./routes/api');


// Routes setup
app.use('/api', apiRoutes);


app.get("/",(req,res)=>{
    res.send("<h3>Har Har Mahadev<\h3>")
})
// app.use('/routes',root);
app.listen(3500,function(req,res){
   
    console.log('server is runnig on port 3500');
});

module.exports = router;