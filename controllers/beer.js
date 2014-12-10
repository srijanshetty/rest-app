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

var Beer = require('../models/beer');

exports.postBeers = function(req, res) {
    var beer = new Beer();

    beer.name = req.body.name;
    beer.type = req.body.type;
    beer.quantity = req.body.quantity;
    beer.userId = req.user._id;

    beer.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({
            message: 'Beer added to locker!',
            data: beer
        });
    });
};

exports.getBeers = function(req, res) {
    Beer.find({ userId: req.user._id }, function(err, beers) {
        if (err) {
            res.send(err);
        }

        res.json(beers);
    });
};

exports.getBeer = function(req, res) {
    Beer.find({ userId: req.user._id, _id: req.params.beer_id }, function(err, beer) {
        if (err) {
            res.send(err);
        }

        res.json(beer);
    });
};

exports.putBeer = function (req, res) {
    Beer.update({ userId: req.user._id, _id: req.params.beer_id }, { quantity: req.body.quantity }, function (err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Quantity updated' });
    });
};

exports.deleteBeer = function(req, res) {
    Beer.remove({ userId: req.user._id, _id: req.params.beer_id }, function(err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'Beer succesfully removed' });
    });
};
