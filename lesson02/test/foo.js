/**
 * Created by jacky on 2015/9/20 10:29.
 */
var bar = require("./bar.js");
var msg = "你好";
var info = "呵呵";

function showInfo(){
    console.log(info);
}

// 暴露出去，交给它的require引用者~ 必须export，才给给require者使用
exports.msg = msg;
exports.info = info;
exports.showInfo = showInfo;