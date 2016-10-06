var express = require('express');
var router = express.Router();
var game = require('../classes/game');
var auth = require('../auth/auth');
/* GET games routes. */
router.get('/',auth.isAuthenticated, function(req, res) {
  res.render('play',{title: 'Playing Hall',content: 'Welcome to playing hall'});
  res.end();
});
router.post('/play', function(req,res){
  var whiteId = req.query.whiteId;
  var blackId = req.query.blackId;
  var whiteName = req.query.whiteName;
  var blackName = req.query.blackName;
  var timeControl = req.query.timeControl;

  if(whiteId && whiteName && blackId && blackName && timeControl){
    var gameObject = {
      whiteId: whiteId,
      blackId: blackId,
      whiteName: whiteName,
      blackName: blackName,
      timeControl: timeControl
    };
    game.createGame(gameObject).then(function(data){
      console.log("Key "+data);
      res.send("Key "+data);
    }, function(error){
      console.log("Error ",error);
    });
  }else{
    res.send({
      error: 1,
      message: "Please provide a valid whiteId, whiteName, blackId, blackName and timeControl"   
    });
  }
  
  res.end();


});
router.post('/watch', function(req,res){
    res.send('Provide a game id to this api to watch the game');
});

module.exports = router;
