/*Contact router*/
var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact me!' });
});

router.get('/send', function(req, res) {

	//Connect to DB
	var connection = mysql.createConnection({
		host		: 'localhost',
		user		: 'root',
		password	: 'root'
	});
	connection.connect();
	connection.query('USE node');

	//Get the users respons, beaware of XSS
	var response = {
		first:req.query.first,
		last:req.query.last
	};
	//Log that shit
	console.log('Ahoj: ' + response["first"] + ' ' + response["last"]);
	res.send("Your e-mail has been sent. <a href='http://127.0.0.1:2000'>Go Back</a>");
	console.log("Saving to DB");

	//insert into stuff
	var post = {

		title:  response['first'],
		secret: response['last']
	};
	

		connection.query('INSERT INTO entry SET ?', post, function (err, result){ 
			if (err) {
				console.log(err);
			} else {
				console.log('SAAAAAAAVED');
			}});
	connection.end();	
	
	//res.redirect(301, '/');
});


module.exports = router;

