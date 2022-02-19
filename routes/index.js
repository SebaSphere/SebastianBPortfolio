var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    title: 'SebaSphere!'
  });

});

router.get('/nsfw', function(req, res, next) {
  res.render('fumo', {
    title: '!'
  });

});

module.exports = router;
