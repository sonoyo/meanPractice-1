var crypto = require("crypto");
var secretKey = "oisajfosihplp@re5435435242odsjf@asff";

//暗号化処理
exports.getHash = function(password) {
    var md5 = crypto.createHash("md5", secretKey);
    md5.update(password);
    return md5.digest("hex");
};
