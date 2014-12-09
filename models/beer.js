var mongoose = require('mongoose');

// Define the Beer Schema
var BeerSchema = new mongoose.Schema({
    name: String,
    type: String,
    quantity: Number
});

// Export the Mongoose Model
module.exports = mongoose.model('Beer', BeerSchema);
