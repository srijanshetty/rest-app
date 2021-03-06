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

