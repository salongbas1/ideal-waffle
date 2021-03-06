var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var connectflash = require('connect-flash')

// middlewere
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy


var session = require('express-session')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var profileRouter = require('./routes/profile');
var indexRouter = require('./routes/index');
var communityRouter = require('./routes/community');

var app = express();
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use(passport.initialize())
app.use(passport.session())

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use(require('connect-flash')());


app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});



//ประกาศให้ทุกที่รู้จัก user
app.get('*',function(req,res,next){
  res.locals.user = req.user || null;
  next();
})

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/profile',profileRouter);
app.use('/community',communityRouter);





//เช็ค error สมัคร



module.exports = app;
