var firebase = require("firebase");
var app = firebase.initializeApp({
	apiKey: 'AIzaSyBiTz1cNiCndam8NFKy0qVhvVGfO1F1Dqw',
	databaseURL: 'https://the-good-word.firebaseio.com'
});
var events = [{
    id: 1,
    place: 'a'
}, {
    id: 2,
    place: 'b'
}, {
    id: 3,
    place: 'c'
}, {
    id: 4
}];
var playgroundRef = firebase.database().ref('playground');
// events.forEach(event => {
//     playgroundRef.push(event);
// });

for (i = 0; i < events.length; i++) {
    event = events[i];
     //check if this event already exists by referencing id
     playgroundRef.orderByChild('id').equalTo(event.id).on('value', snapshot => {
        //event doesn't already exist
        if (!snapshot.val()) {
            console.log(event.id);
            playgroundRef.push(event);
        }
    });
}
// events.forEach(event => {
   
// });
