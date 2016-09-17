var express = require('express');
var mysql 	= require('mysql');
var userFeed = require('../core/core.js');
var rss = require('../core/rss.js');

var router = express();

router.get('/', function respond(req, res) {
	console.log(req.query.id);

	var chanel;
	if (req.query.id) {
		console.log("true");
		chanel = req.query.id;
	} else {
		chanel = 1;
		console.log("Chanel undefined = 1");
	} 
	userFeed.getChanel(chanel, loadFeed);

	function loadFeed(link) {
		console.log('link::' + link[0].feedLink);
		rss.read(link[0].feedLink, function(result){
			
			//Only for testing
			userFeed.getFeedList(1, function(list){
				var feedChanel = list;

				res.render('feed', {
					title: "Feed",
					feedList: feedChanel,
					feed: result
				});
			});
		});
	}

		
});

module.exports = router;
