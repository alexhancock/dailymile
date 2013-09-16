var rest = require('request-json');
var resultHandler = require('./resultHandler');

var client = rest.newClient('http://api.dailymile.com/');

var workoutsFor = function(user, cb){
  client.get('/people/'+ user + '/entries.json', resultHandler(cb));
};
var workoutsNear = function(latLon, cb){
  client.get('/entries/nearby/'+latLon+'.json', resultHandler(cb));
};
var recent = function(cb){
  client.get('/entries.json', resultHandler(cb));
};

exports.workoutsFor = workoutsFor;
exports.workoutsNear = workoutsNear
exports.recent = recent;
