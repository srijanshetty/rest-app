// Required packages
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Use the environment defined port or 3000
var port = process.env.PORT || 3000;

// Routers
var beerRouter = require('./routes/beer');

// Initiate the app
var app = express();

// Connect to the server
mongoose.connect('mongodb://localhost:27017/beerlocker');

app.use(bodyParser.urlencoded({
    extended: true
}));

// Register the beerRouter
app.use('/api', beerRouter);

// Start the server
app.listen(port);

console.log('Listening on port ' + port);
