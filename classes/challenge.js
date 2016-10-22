var FbApp = require('../fire');
var Q = require('q');
function Challenge(){
  console.log("Calling challenge constructor");
}

var createNewChallenge = function(challengeObject){
  var deferred = Q.defer();
  FbApp.database().ref().child('challenges').push(challengeObject)

  .then(function(snap){
      console.log("Got key ",snap.key);
      deferred.resolve(snap.key);
  }).catch(function(error){
      deferred.reject(error);
      console.log("Error creating game ",error);
  });
  return deferred.promise;
}

var removeChallenge = function(key){
  var deferred = Q.defer();
  FbApp.database().ref().child('challenges').child(key).remove()

  .then(function(snap){
    deferred.resolve();
  }).catch(function(error){
    deferred.reject(error);
  });
  return deferred.promise;
}

module.exports = {
    createNewChallenge : createNewChallenge,
    removeChallenge: removeChallenge
};
