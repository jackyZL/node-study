/**
 * Created by jacky on 2015/9/22 9:22.
 */
var express = require("express");

var app = express();

// 接收get请求的 / 路由路径
app.get("/",function(req,res){
    res.send("你好");
});

app.get("/haha",function(req,res){
    res.send("这是haha页面，哈哈哈哈哈哈");
});

// 路由正则
app.get(/^\/student\/([\d]{10})$/,function(req,res){
    res.send("学生信息，学号" + req.params[0]); // 匹配正则参数
});

app.get("/teacher/:gonghao",function(req,res){
    res.send("老师信息，工号" + req.params.gonghao);
});

app.listen(3000);