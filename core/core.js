(function(module){
	/*
	* author: "Peter Czibor"
	*/
	'use strict';

	//Dependencies
	var mysql = require('mysql');
	//mysql connection
	var connection = mysql.createConnection({

	    host     : 'localhost',
	    user     : 'root',
	    password : 'root',
	    database : 'node'
 	 });

	//exports feed chanels from Db to jspn format
	function _getFeedList(userID, callback) {   // FeedChanels
		
		console.log('Feeds for user: ' + userID);
		/*
		var feedList = {feed:{
								feedName : "Aktuality.sk",
								feedURL  : "http://www.aktuality.sk/rss"
							}
		};
		callback(feedList); */ 

		//Get feed chanels from DB ... 

		connection.query('select id, feedName from feeds ORDER BY id ASC',  function(err, row, fields) {
			if (err) throw err;
		    var array = row;
		    console.log(row);
		    callback(array);
		  });

	}
	module.exports = {
		getFeedList: _getFeedList
	};
})(module);
/*
function core(userID) {

	return {
		name: "Peter",
		id: userID,
		feedList: { "feed":[
							{
								"feedName" : "Aktuality.sk",
								"feedURL"  : "http://www.aktuality.sk/rss"
							}
		]},

		twoxtwo: function() {
			var x = 2*2;
			return x;
		}
	}
}*/


/* each value, index in _list
  	p = #{value.feed.feedName}
*/