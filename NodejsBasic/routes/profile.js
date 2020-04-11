var express = require('express');
var router = express.Router();


router.get('/',enSureAuthenticated, function(req, res, next) {
  res.render('profile');
});

function enSureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
          return next();
  } else {
    res.redirect('/users/login');
  }
}

module.exports = router;