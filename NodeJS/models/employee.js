const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    mnumber: { type: String },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    gender: { type: String },
    department: { type: String}
});

module.exports = { Employee };