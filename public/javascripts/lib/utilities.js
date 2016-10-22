var Utilities = function(){
    console.log("Utilities initiated");
}
Utilities.prototype.postRequest = function(data, url,callback){
    var base = 'http://localhost:3000/';
    url = base+url;
    $.post(url,data,callback);
}
Utilities.prototype.initiateFirebase = function(){
    var config = {
    apiKey: "AIzaSyDf_fArwDomvasGG8IMjfjtiuzUGAac8lg",
    authDomain: "project-5178699105010769916.firebaseapp.com",
    databaseURL: "https://project-5178699105010769916.firebaseio.com",
    storageBucket: "project-5178699105010769916.appspot.com",
    messagingSenderId: "163164516980"
  };
  firebase.initializeApp(config);
}

Utilities.prototype.getRandomString = function(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}