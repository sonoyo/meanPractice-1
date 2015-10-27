var mongoose = require('mongoose');

var StoresSchema = mongoose.Schema({
    storeId  : Number,
    storeName: String,
    storeTel : String,
    storeType: String,
    storeSeen: String,
    storeRate: Number
});

module.exports = mongoose.model('Stores', StoresSchema);
