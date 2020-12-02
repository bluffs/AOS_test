const mongoose = require('mongoose');

const aosSchema = mongoose.Schema({
    email: String,
    password: String
});

module.exports =  mongoose.model('aosAuth', aosSchema)