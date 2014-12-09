var express = require('express');

// Create our Express router
var router = express.Router();

// Initiall dummy route
router.get('/', function (req, res) {
    'use strict';
    res.json({ message: 'hooray! It works'});
});

// Initialize the Beer model
var Beer = require('../models/beer');

// Create a route for /beers
var beersRoute = router.route('/beers');
beersRoute.post(function(req, res) {
    var beer = new Beer();

    beer.name = req.body.name;
    beer.type = req.body.type;
    beer.quantity = req.body.quantity;

    beer.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Beer added to locker!',
            data: beer
        });
    });
});

beersRoute.get(function(req, res) {
    Beer.find(function(err, beers) {
        if (err) {
            res.send(err);
        }

        res.json(beers);
    });
});

var beerRoute = router.route('/beers/:beer_id');
beerRoute.get(function(req, res) {
    Beer.findById(req.params.beer_id, function(err, beer) {
        if (err) {
            res.send(err);
        }

        res.json(beer);
    });
});

beerRoute.put(function(req, res) {
    Beer.findById(req.params.beer_id, function(err, beer) {
        if (err) {
            res.send(err);
        }

        beer.quantity = req.body.quantity;

        beer.save(function(err) {
            if (err) {
                res.send(err);
            }

            res.json(beer);
        });
    });
});

beerRoute.delete(function(req, res) {
    Beer.findByIdAndRemove(req.params.beer_id, function(err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Beer succesfully removed' });
    });
});

module.exports = router;

