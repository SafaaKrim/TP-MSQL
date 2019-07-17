var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

  res.render('index', { title: 'TP MySQL' });
});

module.exports = router;
