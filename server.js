// Required packages
var express = require('express');

// Create the app
var app = express();

// Use the environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Initiall dummy route
router.get('/', function (req, res) {
    res.json({ message: 'hooray! It works'});
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);

console.log('Listening on port ' + port);
