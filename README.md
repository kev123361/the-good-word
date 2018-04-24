# The Good Word
## Team 7311 - Section JIE
**Team Members:** Kishan Chudasama, Galen Dockman, Kevin Tang, Thomas Thachil, Shobhit Srivastava

## Release Notes

The Good Word 1.0

We are now ready to roll out our first release of The Good Word! We implemented most of the features that we were hoping to implement for release, although unfortunately we are not currently able to release Google calendar functionality during this release like we had initially intended. We also ran into logistical issues with filtering events that has delayed that release as well.

Our initial release features:
The ability to login using Google+
The ability to store and pull events from Facebook
The ability for users to view detailed information about individual events
The ability for users to perform a text search for specific events

Known Bugs:
Sometimes duplicate events are created in the database
Searchbar at times is not responsive

## Installation Guide

### Architectural Services

An instance of Firebase is utilized for data storage, and authentication along with an instance of our Algolia full-text search and filtering. Our application is linked to specific instances so no further modifications are necessary. 

### Installing Package Dependencies

Make sure to have the latest version of Node.js installed. For more information on Node.js see: https://nodejs.org/en/

To install package dependencies, navigate to the frontend directory and in CLI run:

`npm install`

### Instructions to run Ionic and building
Make sure to have the latest version of Ionic framework. For more information on Ionic see: https://ionicframework.com/getting-started

To build for in-browser testing, use Ionic’s serve command from the frontend directory:

`ionic serve`

To run in an emulator or native device, use the Cordova plugin:

`ionic cordova run android`
`ionic cordova run ios`


## Maintenance

### Events Script
### Cloud Functions

Cloud functions are utilized to update events between Firebase and the Algolia full-text search service. When new functions are added to Firebase’s database, an event-listener triggers a function to update Algolia.  

Please note, to make changes in this area of the application, you must navigate to the functions directory and install all node dependencies specific to updating cloud functions: 

`cd the-good-word/backend/firebase/functions/`
`npm install’


If any changes are made in the index.js cloud functions file (the-good-word/backend/firebase/functions/index.js) they can be deployed with the following command.

`firebase deploy --only functions`


## Troubleshooting

`npm install` has at times failed to automatically install all of the dependencies needed for the application, so if this happens you may need to install the missing dependencies manually. The missing dependencies will be displayed when you attempt to run ionic serve. To install the missing dependency navigate to the frontend directory and run:

`npm install --save [dependency]`

### Java SE 8+ Check Failed

If an error for Java 8+ is being thrown, try installing both Java 8 SDK and JRE from http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html. In Windows, this may require the user to set PATH variables to Java 8 only and exclude other versions of Java.
