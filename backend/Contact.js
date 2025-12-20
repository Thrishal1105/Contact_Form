const mongoose = require('mongoose');

const ContcactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,

});


module.exports = mongoose.model('Contact', ContcactSchema);