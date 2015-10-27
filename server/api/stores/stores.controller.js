// モジュールオブジェクト化
var Stores = require('./stores.model.js');
var commmon = require('../../common/commonFunctions.js');

exports.getStores = function(req, res) {
    Stores.find({}, function(err, data) {
        res.json(data);
    });
};

exports.registerStore = function(req, res) {
    var allStores;
    Stores.find({}, function(err, data) {
        allStores = data;
        console.log(allStores);
    });

    var id;
    if(allStores) {
        id = 1;
    }

    var newStore = new Stores({
        storeId  : id,
        storeName: req.body.storeName,
        storeTel : req.body.storeTel,
        storeType: req.body.storeType,
        storeSeen: req.body.storeSeen,
        storeRate: req.body.storeRate
    });
    newStore.save();

    res.json(newStore);
};

exports.deleteStore = function(req, res) {
    var editStoreName = req.body.storeName;
    Stores.remove({storeName: editStoreName}, function(err) {
        if(err) {
            console.log('catch error...');
        }
        Stores.find({}, function(err, data) {
            res.json(data);
        });
    });
};

exports.updateStore = function(req, res) {
    console.log(req.body.storeName);
    Stores.findOne({storeName: req.body.storeName}, function(err, data) {
        console.log(data);
        data.storeTel = req.body.storeTel;
        data.storeType = req.body.storeType;
        data.storeSeen = req.body.storeSeen;
        data.storeRate = req.body.storeRate * 1;

        data.save();
        console.log(data);
        Stores.find({}, function(err, dataAll) {
            res.json(dataAll);
        });
    });
};
