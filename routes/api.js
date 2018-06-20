var express = require('express');
var router = express.router();


var flightController = require('../flightController/flight');

router.post('/flightCrawler/',flightController.getflight);


module.exports = router;