/**
 * Created by Danny on 2015/9/22 10:22.
 */
var express = require("express");

var app = express();

//当你不写路径的时候，实际上就相当于"/"，就是所有网址
app.use(function (req, res, next) {
    console.log(new Date());
    next();
});

app.get("/haha", function (req, res) {
    console.log("哈哈");
});

//可以匹配 /admin 或者 /admin/abc  或者 /admin/abc/def
// 比如访问： http://127.0.0.1:3000/admin/aa/bb/cc/dd
app.use("/admin", function (req, res) {
    res.write(req.originalUrl + "\n");   //    /admin/aa/bb/cc/dd
    res.write(req.baseUrl + "\n");  //   /admin
    res.write(req.path + "\n");   //    /aa/bb/cc/dd
    res.end("你好");
});


app.listen(3000);