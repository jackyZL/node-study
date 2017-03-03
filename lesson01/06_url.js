var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){

	//得到查询部分，由于写了true，那么parse返回一个对象。否则返回一个字符串
	// parse(req.url,true)返回一个urlObject对象，parse(req.url,true).query 表示得到这个对象的query属性
	var queryObj = url.parse(req.url,true).query;
	var name = queryObj.name;
	var age = queryObj.age;
	var sex = queryObj.sex;
	
	res.end("服务器收到了表单请求" + name + age + sex);
});

server.listen(3000,"127.0.0.1");