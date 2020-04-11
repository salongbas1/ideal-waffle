var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('home');
  });
  
  router.get('/delete', function(req, res, next) {
    res.send('delete profile');
  });

  function enSureAuthenticated(req,res,next){
    if(req.isAuthenticated()){
            return next();
    } else {
      res.redirect('/users/login');
    }
}
  
  module.exports = router;
  