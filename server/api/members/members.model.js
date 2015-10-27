var mongoose = require('mongoose');

var MembersSchema = mongoose.Schema({
    email : String,
    password: String
});

module.exports = mongoose.model('Members', MembersSchema);
