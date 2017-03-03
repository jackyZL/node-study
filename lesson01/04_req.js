var http = require("http");

var server = http.createServer(function(req,res){
	// req.url 表示用户请求的路径
	console.log(req.url);
	res.end();
});

server.listen(3000,"127.0.0.1");