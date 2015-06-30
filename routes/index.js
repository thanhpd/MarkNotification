var express = require('express');
var router = express.Router();
var dbConnector = require('../dbconnector');

/* GET home page. */
router.get('/', function(req, res, next) {
  var results = dbConnector(req, res);
  console.log(results);
  res.render('index',{ response: results, title: 'Mark Notification | VNU,H - UET'});

});

module.exports = router;
