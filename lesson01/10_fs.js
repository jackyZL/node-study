var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	//stat检测文件状态
	fs.stat("./album/bbb",function(err,stats){
		//检测这个路径，是不是一个文件夹
		console.log(stats.isDirectory());
	});
});

server.listen(3000,"127.0.0.1");