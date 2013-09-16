var nock = require('../node_modules/nock');

// Set up fake dailymile HTTP responses
var fakeDailyMile = nock('http://api.dailymile.com');
var fakeWorkout = {"id":25091293,"url":"http://www.dailymile.com/entries/25091293","at":"2013-09-16T00:30:39Z","message":"A nice Sunday morning run","comments":[],"likes":[],"location":{"name":"Oakland, CA"},"user":{"username":"AlexJH","display_name":"Alex H.","photo_url":"http://s3.dmimg.com/pictures/users/28759/1377573960_avatar.jpg","url":"http://www.dailymile.com/people/AlexJH"},"workout":{"activity_type":"Running","distance":{"value":9.9985,"units":"miles"},"felt":"good","duration":4257,"title":"Crystal Springs Reservoir"}};
var mockResponse = [fakeWorkout]

fakeDailyMile.get('/people/alexjh/entries.json').reply(200, {
  "entries": [fakeWorkout]
});
fakeDailyMile.get('/entries/nearby/123,456.json').reply(200, {
  "entries": [fakeWorkout, fakeWorkout]
});
fakeDailyMile.get('/entries.json').reply(200, {  
  "entries": [fakeWorkout, fakeWorkout, fakeWorkout]
});
