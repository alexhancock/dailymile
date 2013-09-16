var resultHandler = function(cb){
  // A closure to save a reference to the callback
  return function(err, res, body){
    if (err) return cb(err);
    cb(undefined, body);
  };
}

module.exports = resultHandler;
