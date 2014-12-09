var express = require('express');

// Create our Express router
var router = express.Router();

// Initialize the Beer model
var beerController = require('../controllers/beer');

// Create a route for /beers
router.route('/')
      .post(beerController.postBeers)
      .get(beerController.getBeers);

// Create routes for /beers/:beer_id
router.route('/:beer_id')
      .get(beerController.getBeer)
      .put(beerController.putBeer)
      .delete(beerController.deleteBeer);

module.exports = router;

