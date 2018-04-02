// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Authenticate to Algolia Database.
// TODO: Make sure you configure the `algolia.app_id` and `algolia.api_key` Google Cloud environment variables.
const algoliasearch = require('algoliasearch');
const algolia = algoliasearch(functions.config().algolia.appid, functions.config().algolia.adminkey);


// Updates the search index when new contacts are created or updated.
exports.updateContacts = functions.database.ref('/contacts/{contactId}').onWrite(event => {

    const index = algolia.initIndex('contacts');
  
    const contactId = event.params.contactId
    const data = event.data.val()
  
    if (!data) {
      return index.deleteObject(contactId, (err) => {
        if (err) throw err
        console.log('Contact removed from Algolia index', contactId)
      })
  
    }
  
    data['objectID'] = contactId
  
    return index.saveObject(data, (err, content) => {
      if (err) throw err
      console.log('Contact updated in Algolia index', data.objectID)
    })
  
  })
  
  // Updates the search index when new contacts are created or updated.
  exports.updateEvents = functions.database.ref('/testdata/{eventId}').onWrite(event => {

    const index = algolia.initIndex(ALGOLIA_INDEX_NAME);

    const eventId = event.params.eventId
    const data = event.data.val()

    if (!data) {
      return index.deleteObject(eventId, (err) => {
        if (err) throw err
        console.log('Event removed from Algolia index', eventId)
      })
  
    }
  
    data['objectID'] = eventId
  
    return index.saveObject(data, (err, content) => {
      if (err) throw err
      console.log('Event updated in Algolia index', data.objectID)
    })
  
  });


