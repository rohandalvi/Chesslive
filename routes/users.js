var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getUserInfo', function(req,res,next){
  res.send('lets look for this user info');
});

module.exports = router;
