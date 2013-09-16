# dailymile

This is a simple node.js module, which wraps the [dailymile.com](http://dailymile.com/) REST API.

## Installation
`npm install dailymile`

## Usage
```javascript
//// app.js

var dailymile = require('dailymile');

// Activity for a specific user
dailymile.workoutsFor('alexjh', function(err, workouts){
  console.log(workouts);
});

// Activity near a lat/lng
dailymile.workoutsNear('37.804364,-122.271114', function(err, workouts){
  console.log(workouts);
});

// Most recent twenty entries
dailymile.recent(function(err, workouts){
  console.log(workouts);
});
```
## Deps
* The `request-json` module

## Tests
A very basic spec-file is provided, which does basic sanity checks on response data. To run the tests, execute `npm test` from the root of a checkout

## More Infomation
Additional documentation about the API can be found [here](http://www.dailymile.com/api/documentation).

**NOTE:** I am not professionally affiliated with dailymile; I wrote this module because I'm a runner and I like dailymile.