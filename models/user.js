var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', function (callback) {
    var user = this;

    // Break out if password hasn't changed
    if (!user.isModified('password')) {
        return callback();
    }

    // Hash the password if it has changed
    bcrypt.genSalt(5, function(err, salt) {
        if (err) {
            return callback(err);
        }

        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) {
                return callback(err);
            }

            user.password = hash;
            callback();
        });
    });

});

module.exports = mongoose.model('user', UserSchema);
