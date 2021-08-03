const mongoose = require('mongoose');

var Department = mongoose.model('Department', {
    name: { type: String }
});

module.exports = { Department };