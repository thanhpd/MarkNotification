var express = require('express');
var router = express.Router();
var db_handler = exports.handle_database;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mark Notification | VNU,H - UET' });

});

module.exports = router;
