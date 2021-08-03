const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bdots:XGNq6cU40QCzTYlx@cluster0.dxqss.mongodb.net/test', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;