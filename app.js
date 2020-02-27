var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var reg = require('./routes/reg');
var login = require('./routes/login');
var logout = require('./routes/logout');
var user = require('./routes/user');
var driverlist = require('./routes/driverlist');
var driveradd = require('./routes/driverAdd');
var driveredit = require('./routes/driverEdit');


// var subform = require('./routes/subform');
// var usesession = require('./routes/usesession');
// var usecookies = require('./routes/usecookies');
// var usecrypto = require('./routes/usecrypto');  

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//这里传入了一个密钥加session id
 app.use(cookieParser('Wilson'));
//使用靠就这个中间件
app.use(session({ secret: 'wilson'}));


app.use('/', indexRouter);
app.use('/reg', reg);
app.use('/login', login);
app.use('/logout', logout);
app.use('/user', user);
app.use('/driverlist', driverlist);
app.use('/driverAdd', driveradd);
app.use('/driverEdit', driveredit);
// app.use('/subform', subform);
// app.use('/usesession', usesession);
// app.use('/usecookies', usecookies);
// app.use('/usecrypto', usecrypto);



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

app.listen(3000,function(){
    console.log("Server Start!");
});

module.exports = app;
