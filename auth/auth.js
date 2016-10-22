var FbApp = require('../fire');
var authRef = FbApp.auth();
var game = require('../classes/game');
var Q = require('q');
function isAuthenticated(req,res,next){
    var currentUser = authRef.currentUser;
    if(currentUser)
        return next();
    res.redirect('/notFound');
}

function allowToMove(req,res,next){
    var currentUser = authRef.currentUser;

    var gameId = req.params.gameId;
    if(!currentUser || !gameId) res.redirect('/notFound');
    game.getGame(gameId).then(function(gameObject){
        if(!gameObject) res.redirect('/notFound');
        var ownerId = gameObject.owners.split(",");
        if(!_.contains(ownerId, currentUser)) res.redirect('/notFound');
        else return next();
    }, function(error){
        res.redirect('/notFound');
    });
}



function getCurrentUser(){
    return authRef.currentUser;
}

function register(email,password){
    var deferred = Q.defer();

    authRef.createUserWithEmailAndPassword(email,password)
    .catch(function(error){

        var errorCode = error.code;
        var errorMessage = error.message;
        if(error){
            deferred.reject(error);
        }else{
            deferred.resolve("Success");
        }
    });
    return deferred.promise;
}

function signIn(email,password){
    authRef.signInWithEmailAndPassword(email,password)
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode === 'auth/wrong-password'){
            console.log("Wrong password "+errorCode);
        }else{
            console.log("Other sign in error "+errorMessage+" with error code "+errorCode);
        }
    });
}

function signOut(){
    var deferred = Q.defer();

    authRef.signOut().then(function(){
        deferred.resolve("User signed out");
    }, function(error){
        deferred.reject(error);
    });
    return deferred.promise;
}

function attachAuthChange(){
    authRef.onAuthStateChanged(function(user){
        if(user){
            console.log("User signed in");
        }else{
            console.log("No user signed in");
        }
    });
}

module.exports = {
    isAuthenticated : isAuthenticated,
    register: register,
    signIn: signIn,
    signOut: signOut,
    attachAuthChange: attachAuthChange,
    getCurrentUser: getCurrentUser
};
