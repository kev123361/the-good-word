var fs = require('fs');
var moment = require("moment");

var events = JSON.parse(fs.readFileSync('backend/facebook/manual_events.json', 'utf8'));
var events = events.events;
var firebase = require('firebase');
var app = firebase.initializeApp({
	apiKey: 'AIzaSyBiTz1cNiCndam8NFKy0qVhvVGfO1F1Dqw',
	databaseURL: 'https://the-good-word.firebaseio.com'
});

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
        input.location_name = event.place.name;
    }
    input.id = event.id;
    input.url = `https://facebook.com/events/${input.id}`;
    if (event.start_time) {
        input.start_time = event.start_time;
    }
    if (event.end_time) {
        input.end_time = event.end_time;
    }
    if (event.start_time) {
        input.date = event.start_time;
    }
    var testNode = firebase.database().ref('data');
    var newRef = testNode.push();
    newRef.set(input);
    console.log(input.id);

}
