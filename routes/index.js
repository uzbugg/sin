var express = require('express');
var mysql 	= require('mysql');

var router = express();

//MySql Connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'node'
  });
/*
  connection.connect(function(err) {
    if (err) {
      console.log('Error connecting to DB');
      throw err;
    }
  });
*/
/* GET home page. */
router.get('/', function(req, res, next) {

  //aray for values
  connection.query('select * from entry ORDER BY id DESC',  function(err, row, fields) {
    var array = row;
    res.render('index', { 
      title: 'title :)', 
      secret: array,
     });
  });
  //console.log('aray: ' + array[0]['id'].id);
  
});
//console.log('aray: ' + array[0]);



router.get('/page', function(req, res, next) {
  res.render('page', { title: 'Nope' });
});

/*
router.get('/contact', function(req, res, next) {
	res.render('contact', {title: 'Contact me!'});
});*/

module.exports = router;
