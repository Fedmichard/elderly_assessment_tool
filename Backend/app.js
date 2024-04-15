var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var resourcesRouter = require('./routes/resources');
var usersRouter = require('./routes/users');
var questionsRouter = require('./routes/questions');
var scamsRouter = require('./routes/scams');
var verified_scamsRouter = require('./routes/verified_scams');
var answersRouter = require('./routes/answers');

var app = express();

global.conn = require('./dbConnection/server');

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to Database');
});

// view engine setup
app.get('/', (req, res) => {
    res.sendFile('/', 'bin/index.html')
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/resources', resourcesRouter);
app.use('/users', usersRouter);
app.use('/questions', questionsRouter);
app.use('/scams', scamsRouter);
app.use('/verified_scams', verified_scamsRouter);
app.use('/answers', answersRouter);

app.listen(3001, ()=> {
    "Connected to port 3001"
})

module.exports = app;