var assert = require('assert');
var stubs = require('./stubs');
var module = require('../src/module');

assert.doesNotThrow(function(){
  assert(module.workoutsFor, "Module - Exports a 'workoutsFor' method");
  module.workoutsFor('alexjh', function(err, fakeWorkouts){
    assert(fakeWorkouts['entries'], "workoutsFor - Return the daily mile API result for the user's workouts in the success case");
    assert(fakeWorkouts['entries'].length === 1, "workoutsFor - Returns the proper number of workouts");
  })
}, "workoutsFor - Does not throw errors if dailymile responds with API data")

assert.doesNotThrow(function(){
  assert(module.workoutsNear, "Module - Exports a 'workoutsNear' method");
  module.workoutsNear('123,456', function(err, fakeWorkouts){
    assert(fakeWorkouts['entries'], "workoutsNear - Return the daily mile API result for the user's workouts in the success case");
    assert(fakeWorkouts['entries'].length === 2, "workoutsNear - Returns the proper number of workouts");
  })
}, "workoutsNear - Does not throw errors if dailymile responds with API data")

assert.doesNotThrow(function(){
  assert(module.workoutsNear, "Module - Exports a 'workoutsNear' method");
  module.recent(function(err, fakeWorkouts){
    assert(fakeWorkouts['entries'], "workoutsNear - Return the daily mile API result for the user's workouts in the success case");
    assert(fakeWorkouts['entries'].length === 3, "workoutsNear - Returns the proper number of workouts");
  })
}, "recent - Does not throw errors if dailymile responds with API data")
