var express = require('express');
var mysql 	= require('mysql');
var userFeed = require('../core/core.js');
var rss = require('../core/rss.js');

var router = express();



rss.read('http://www.aktuality.sk/rss', function(result){
	//var json = JSON.parse(result);
	console.log(result[0].title);

	userFeed.getFeedList(1, function(list){
		//console.log("feed name:: " + list.feed.feedName);

		var feedChanel = list;
		//console.log("Chanel: " + feedChanel[0]['id'].id);
		router.get('/', function(req, res) {

		res.render('feed', {
			title: "Feed",
			feedList: feedChanel, //List of all rss chanels
			feed: result // rss.read() resdutl ... 
			});
		});
	});
});




module.exports = router;
