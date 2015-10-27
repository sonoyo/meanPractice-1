//Membersモデルのオブジェクト化
var Members = require('./members.model.js');
//ハッシュ処置オブジェクトのオブジェクト化
var common = require('../../common/commonFunctions.js');

// ログイン処理
exports.login = function(req, res) {
};

// 新しいメンバーを追加
exports.signUp = function(req, res) {
  var newMember = new Members({
    email: req.body.email,
    password: common.getHash(req.body.password)
  });
  newMember.save();
  res.json(newMember);
};
