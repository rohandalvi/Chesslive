var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('notFound', { title: 'Uh Oh!' , message: 'The page you are looking for is missing!'});
});

module.exports = router;
