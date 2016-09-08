(function(module){
	'use strict';
	//This class contains setting
	//user setting
	//core functions
	//author: Peter Czibor


	function _getFeedList(userID, callback) {

		console.log('Feeds for user: ' + userID);
		var feedList = {feed:{
								feedName : "Aktuality.sk",
								feedURL  : "http://www.aktuality.sk/rss"
							}
		};
		callback(feedList);

	}

	module.exports = {
		getFeedList: _getFeedList
	};
})(module);/*
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