var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('community');
  });
  
  router.get('/delete', function(req, res, next) {
    res.send('delete profile');
  });
  
  module.exports = router;