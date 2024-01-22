//importing required modules (alot are dependencies)
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
//log information of the requestion to the console.
var logger = require('morgan');
var mongoose = require('mongoose');
var dotenv = require('dotenv');

//Load in the env variables from the .env
dotenv.config();

//establish connection to the database(mongoDB)
mongoose.connect(process.env.MONGO_DB);

//defining our routers
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

//define the app
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//defining our middleware.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
