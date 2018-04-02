var request = require("request");
var oauth = require("oauth");
var moment = require("moment");
var firebase = require("firebase");
var app = firebase.initializeApp({
	apiKey: 'AIzaSyBiTz1cNiCndam8NFKy0qVhvVGfO1F1Dqw',
	databaseURL: 'https://the-good-word.firebaseio.com'
});

var token;
const clubList = ['SympVibes', 'gtakpsi', 'infiniteharmony', 'gtscpc', 'nothinbuttreble', 'bookthegarage', 'gtgleeclub', 'gtsaa', 'taaltadka', 'gtorchestras', 'gtchamberchoir', 'gtwebdev', 'gtbands', 'gtcomputing', 'gtjazzstudies', 'vgdevgt'];
var eventList = [];

request.get('https://graph.facebook.com/v2.12/oauth/access_token?client_id=1956087834638225&client_secret=2b0a3f1810e47b2a5887bb7c042352cc&grant_type=client_credentials', function (err, res, body) {
	if (err) {
		console.log(err);
		console.log("Make sure you've put the app secret in the url.");
	}
	if (body) {
		token = JSON.parse(body)["access_token"];
		clubList.forEach(function (club) {
			request.get(`https://graph.facebook.com/v2.12/${club}/events?access_token=${token}`, function (err, res, body) {
				if (err) {
					console.log(err);
				}
				if (res) {
					var events = JSON.parse(res.body);
					var events = events.data;
					for (i = 0; i < events.length; i++) {
						var event = events[i];
						var input = {};
						if (event.name) {
							input.name = event.name;
						}
						if (event.description) {
							input.description = event.description;
						}
						if (event.place && event.place.name) {
							input.location_name = event.place.name | 'no name';
						}
						input.id = event.id;
						input.url = `https://facebook.com/events/${input.id}`;
						if (event.start_time) {
							input.start_time = moment(event.start_time).format('h:mm a');
						}
						if (event.end_time) {
							input.end_time = moment(event.end_time).format('h:mm a');
						}
						if (event.start_time) {
							input.date = moment(event.start_time).format('YYYY-MM-DD');
						}
						var testNode = firebase.database().ref('testdata');
						//check if event already exists
						var exists = false;
						var query = testNode.orderByChild('id');
						query = query.equalTo(input.id);
						query.on('value', function(snapshot) {
							exists = true;
						});
						if (!exists) {
							var newEventRef = testNode.push();
							newEventRef.set(input);
						}
					}
				}
			});
		})
	}
});