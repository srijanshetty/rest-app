// Required packages
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Use the environment defined port or 3000
var port = process.env.PORT || 3000;

// Routers
var beerRouter = require('./routes/beer');
var userRouter = require('./routes/user');

// Initiate the app
var app = express();

// Connect to the server
mongoose.connect('mongodb://localhost:27017/beerlocker');

app.use(bodyParser.urlencoded({
    extended: true
}));

// Use Passport for authentication
app.use(passport.initialize());

// Register the beerRouter
app.use('/api/beers', beerRouter);
app.use('/api/users', userRouter);

// Start the server
app.listen(port);

console.log('Listening on port ' + port);
