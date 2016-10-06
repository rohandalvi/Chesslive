var firebase = require('firebase');
var config = require('./settings/config');
var FbApp = firebase.initializeApp(config.config);

module.exports = FbApp;