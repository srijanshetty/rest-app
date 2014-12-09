var User = require('../models/user');

exports.postUsers = function(req, res) {
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function(err) {
        if (err) {
            res.send(err);
        }

        res.json({ message: 'New beer drinker added!' });
    });
};

exports.getUsers = function(req, res) {
    User.find(function(err, users) {
        if (err) {
            res.send(err);
        }

        res.json(users);
    });
};
