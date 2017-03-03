var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	//不处理小图标
	if(req.url == "/favicon.ico"){
		return;
	}
	//存储所有的文件夹
	var wenjianjia = [];
	//readdir 读取文件夹内的所有文件，包括里面的文件夹
	fs.readdir("./album",function(err,files){
		//files是个文件名的数组，并不是文件的数组，表示./album这个文件夹中的所有东西，包括里面的文件、文件夹
		for(var i = 0 ; i < files.length ;i++){
			var thefilename = files[i];
			//又要进行一次检测
			fs.stat("./album/" + thefilename , function(err,stats){
				//如果他是一个文件夹，那么输出它：
				if(stats.isDirectory()){
					wenjianjia.push(thefilename);
				}
				console.log(wenjianjia);
			});
		}
	});

	// 上面程序的问题：for循环了 嵌套了很多异步执行操作，很难保证局部变量的同步，解决方法： 强行把异步语句 变成同步语句
});

server.listen(3000,"127.0.0.1");