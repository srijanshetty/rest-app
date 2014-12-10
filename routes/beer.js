var express = require('express');
var router = express.Router();

// Beer controller
var beerController = require('../controllers/beer');

// Authentication controller
var authController = require('../controllers/auth');

// Create a route for /beers
router.route('/')
      .post(authController.isAuthenticated, beerController.postBeers)
      .get(authController.isAuthenticated, beerController.getBeers);

// Create routes for /beers/:beer_id
router.route('/:beer_id')
      .get(authController.isAuthenticated, beerController.getBeer)
      .put(authController.isAuthenticated, beerController.putBeer)
      .delete(authController.isAuthenticated, beerController.deleteBeer);

// Export the router
module.exports = router;

