/*Contact router*/
var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('manager', { title: 'Rss chanel manager' });
});

router.get('/send', function(req, res) {

	//Connect to DB
	var connection = mysql.createConnection({
		host		: 'localhost',
		user		: 'root',
		password	: 'root',
		database    : 'node'
	});

	//Get the users respons, beaware of XSS
	var response = {
		name:req.query.name,
		chanel:req.query.Chanel,
		description:req.query.Description
	};

	if (!response['description']) {
		response['description'] = '';
	}
	//Log that shit
	console.log('Adding: ' + response["chanel"]);
	console.log("Saving to DB");

	//insert into stuff
	var post = {

		feedName : response['name'],
		feedLink: response['chanel'],
		feedDesc: response['description']
	};
	

		connection.query('INSERT INTO feeds SET ?', post, function (err, result){ 
			if (err) {
				throw err;
			} else {
				console.log('SAAAAAAAVED :::: ' + result);
			}});
	//res.send("Your chanel is now activated!");	
	
	res.redirect(301, '/');
});


module.exports = router;

