var express = require('express');

// Create our Express router
var router = express.Router();

// Initiall dummy route
router.get('/', function (req, res) {
    'use strict';
    res.json({ message: 'Welcome to Beer Locker'});
});

// Initialize the Beer model
var beerController = require('../controllers/beer');

// Create a route for /beers
router.route('/beers')
      .post(beerController.postBeers)
      .get(beerController.getBeers);

// Create routes for /beers/:beer_id
router.route('/beers/:beer_id')
      .get(beerController.getBeer)
      .put(beerController.putBeer)
      .delete(beerController.deleteBeer);

module.exports = router;

