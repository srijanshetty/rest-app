/*
 * Copyright (c) 2014 Srijan R Shetty <srijan.shetty+code@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

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
