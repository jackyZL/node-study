/**
 * Created by jacky on 2015/9/22 9:37.
 */
var express = require("express");
var app = express();

// 设置模板引擎
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("haha",{ // 默认是渲染 views文件夹下的ejs，所以这里没有填写路径
        "news" : ["我是小新闻啊","我也是啊","哈哈哈哈"]
    });
});

app.listen(3000);