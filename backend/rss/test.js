var myProductName = "feedParserDemo"; myVersion = "0.4.3";
var firebase = require("firebase");
var app = firebase.initializeApp({
	apiKey: 'AIzaSyBiTz1cNiCndam8NFKy0qVhvVGfO1F1Dqw',
	databaseURL: 'https://the-good-word.firebaseio.com'
});


const request = require ("request");
const FeedParser = require ("feedparser");

const urlTestFeed = "http://www.calendar.gatech.edu/feeds/events.xml";

function getFeed (urlfeed, callback) {
	var req = request (urlfeed);
	var feedparser = new FeedParser ();
	var feedItems = new Array ();
	req.on ("response", function (response) {
		var stream = this;
		if (response.statusCode == 200) {
			stream.pipe (feedparser);
			}
		});
	req.on ("error", function (err) {
		console.log ("getFeed: err.message == " + err.message);
		});
	feedparser.on ("readable", function () {
		try {
			var item = this.read (), flnew;
			if (item !== null) { //2/9/17 by DW
				feedItems.push (item);
				}
			}
		catch (err) {
			console.log ("getFeed: err.message == " + err.message);
			}
		});
	feedparser.on ("end", function () {
		callback (undefined, feedItems);
		});
	feedparser.on ("error", function (err) {
		console.log ("getFeed: err.message == " + err.message);
		callback (err);
		});
	}

console.log ("\n" + myProductName + " v" + myVersion + ".\n"); 
getFeed (urlTestFeed, function (err, feedItems) {
	if (!err) {
		function pad (num) { 
			var s = num.toString (), ctplaces = 3;
			while (s.length < ctplaces) {
				s = "0" + s;
				}
			return (s);
			}
		
		console.log ("There are " + feedItems.length + " items in the feed.\n");
		var allEvents = [];
		for (var i = 0; i < feedItems.length; i++) {
			var x = feedItems[i].summary;
			x = x.replace(/<(?:.|\n)*?>/gm, '');
			x = x.replaceAll('&nbsp;', '\n');
			var title = feedItems[i].title;
			var link = feedItems[i].link;
			var date = x. extract("Date:\n", "Location:");
			var summary = x.extract("Summary Sentence:\n", "Contact");
			var location = x.extract("Location:\n", "Summary")
			var description = x.extract("Contact:\n", "Fee:");
			var cost = x.extract("Fee:\n", "Event");
			var category = x.extract("Categories:\n", "");
			var event = new Object();
			event.title = title;
			event.link = link;
			event.date = date;
			event.summary = summary;
			event.location = location;
			event.cost = cost;
			event.category = category;
			console.log(event);
			var testNode = firebase.database().ref('testdata');
			var newEventRef = testNode.push();
			newEventRef.set(event);
			// console.log("Title: " + title);
			// console.log("Link: " + link);
			// console.log("Date: " + date);
			// console.log("Location: " + location);
			// console.log("Summary: " + summary);
			// console.log("Cost: " + cost);
			// console.log("Category: " + category);
			// console.log('\n\n ------------ \n\n');
			//console.log(feedItems[i].summary.replace(/<(?:.|\n)*?>/gm, ''));
			//console.log ("Item #" + pad (i) + ": " + feedItems [i].title + ".\n");
			}
		}
	});

	String.prototype.replaceAll = function(search, replacement) {
		var target = this;
		return target.replace(new RegExp(search, 'g'), replacement);
	};

	String.prototype.extract = function(prefix, suffix) {
		s = this;
		var i = s.indexOf(prefix);
		if (i >= 0) {
			s = s.substring(i + prefix.length);
		}
		else {
			return '';
		}
		if (suffix) {
			i = s.indexOf(suffix);
			if (i >= 0) {
				s = s.substring(0, i);
			}
			else {
			  return '';
			}
		}
		return s;
	};
