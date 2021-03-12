const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/api/comments')
const storiesRouter = require('./routes/stories');
const profileRouter = require(`./routes/profile`);
const followRouter = require(`./routes/api/follow`);
const storiesApiRouter = require('./routes/api/stories')
const likesRouter = require("./routes/api/likes");

const { sessionSecret } = require('./config');
const { restoreUser } = require('./auth');

const app = express();

// view engine setup
app.set('view engine', 'pug');

// set up session middleware
const store = new SequelizeStore({ db: sequelize });
app.use(cookieParser(sessionSecret));
app.use(
  session({
    secret: sessionSecret,
    store,
    saveUninitialized: false,
    resave: false,
  })
);

app.use(restoreUser)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// create Session table if it doesn't already exist
store.sync();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stories', storiesRouter);
app.use(`/profile`, profileRouter);
app.use(`/follow`, followRouter);
app.use(`/profile`, profileRouter)

// These are API routes
//todo change all of the comment routes to be comments/api/
app.use('/comments', commentsRouter);
app.use("/stories/api", storiesApiRouter);
app.use('/likes/api/', likesRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
