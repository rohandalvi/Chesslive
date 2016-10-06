/* this is the game class
Will contain following functions.
1. createGame() //private function invoked by requestGame
2. requestGame() //invoked by the user
3. abortGame(gameId, permissions) // abort a game, Can only be requested by player. 
*/
var FbApp = require('../fire');
var Q = require('q');
function Game(){
    console.log("Calling constructor");
}
var createGame = function(gameObject){

    var deferred = Q.defer();
    var newGameKey = "";

    FbApp.database().ref().child('games').push(gameObject)

    .then(function(snap){
        console.log("Got key ",snap.key);
        deferred.resolve(snap.key);
    }).catch(function(error){
        deferred.reject(error);
        console.log("Error creating game ",error);
    });
    return deferred.promise;

}

var addMove = function(fen,position,pgn,gameOver,gameId){
    var deferred = Q.defer();
    var gameObject = {
        fen: fen,
        position: position,
        pgn: pgn,
        gameOver: gameOver
    }
    FbApp.database().ref().child('games').child(gameId).update(gameObject)
    .then(function(snap){
        deferred.resolve(snap);
    }, function(error){
        deferred.reject(error);
    });
    return deferred.promise;
}

var getGame = function(gameId){
    var deferred = Q.defer();
    FbApp.database().ref().child('games').child(gameId).on('value', function(snap){
        deferred.resolve(snap.val());
    }, function(error){
        deferred.reject(error);
    });
    return deferred.promise;
}
var getSampleJSON = function(){
    console.log("Called to get JSON");
    return {
        id: "someRandomId",
        white: "rohan",
        black: "purva"
    };
}
module.exports = {
    createGame : createGame,
    addMove: addMove,
    getSampleJSON: getSampleJSON
};  