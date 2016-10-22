var express = require('express');
var router = express.Router();
var challenge = require('../classes/challenge');
var auth = require('../auth/auth');

router.get('/',auth.isAuthenticated, function(req,res){
  res.render('play', {title:'Challenge', content: 'Challenge window'});
  res.end();
});

router.post('/new',function(req,res){
  var userId = req.query.userId;
  var rating = req.query.rating;
  var timeControl = req.query.timeControl;
  console.log("Current User ",auth.getCurrentUser());
  if(userId && rating && timeControl){
    var challengeObject = {
      user: userId,
      rating: rating,
      time: timeControl
    };
    challenge.createNewChallenge(challengeObject).then(function(data){
      res.send("Key "+data);
    }, function(error){
      console.log("Error ",error);
    });
  }else{
    res.send({
      error: 1,
      message: "Please provide a valid userId, rating, time"
    });
  }
  res.end();
} );

module.exports = router;
