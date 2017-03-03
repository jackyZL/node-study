/**
 * Created by jacky on 2015/9/22 9:22.
 */
var express = require("express");

var app = express();

// express 静态资源的能力(以public为根目录)，就可以访问 http://127.0.0.1:3000/image/xxx
app.use(express.static("./public"));

app.get("/haha",function(req,res){
    res.send("haha ");
});

app.listen(3000);