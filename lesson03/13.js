/**
 * Created by jacky on 2015/9/22 14:37.
 *
 * ● GET请求的参数在URL中，在原生Node中，需要使用url模块来识别参数字符串。在Express中，不需要使用url模块了。可以直接使用req.query对象。
 * ● POST请求在express中不能直接获得，必须使用body-parser模块。使用后，将可以用req.body得到参数。但是如果表单中含有文件上传，那么还是需要使用formidable模块。
 */
var express = require("express");
var bodyParser = require('body-parser')

var app = express();

//模板引擎
app.set("view engine","ejs");

app.get("/",function(req,res){
     res.render("form");
});

//bodyParser API
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/",function(req,res){
    console.log(req.body);
});

app.listen(3000);