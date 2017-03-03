/**
 * Created by jacky on 2015/9/20 10:28.
 */

/**
 *  在引用一个文件夹, 引用node_modules文件夹下的 bar文件夹
 *  而且Node.js将会去寻找node_modules目录下的bar文件夹中的index.js去执行(index.js作为入口，如 var msg = "哈哈"; exports.msg = msg)。
 *  如果没有 index.js文件，那么推荐下面的方式：
 *  每一个模块文件夹中，推荐都写一个package.json文件，这个文件的名字不能改。node将自动读取里面的配置。有一个main项，就是入口文件.
 *  {
	  "name": "kaoladebar",
	  "version": "1.0.1",
	  "main" : "app.js"
	}
    package.json文件，要放到模块文件夹的根目录去。
 *
 */
var bar = require("bar");


console.log(bar.msg);


