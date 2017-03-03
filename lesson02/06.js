/**
 * Created by jacky on 2015/9/20 10:28.
 */

// 没有写./ 所以不是一个相对路径，是一个特殊的路径，默认从node_modules文件夹中引入
/**
 * Node.js将该文件视为node_modules目录下的一个文件
 *
 * node_modules文件夹并不一定在同级目录里面，在任何直接祖先级目录中，都可以。
 * 甚至可以放到NODE_PATH环境变量(NODE_PATH环境变量需要自己建立)的文件夹中。这样做的好处稍后你将知道：分享项目的时候，不需要带着modules一起给别人。
 */
var foo = require("foo.js");

console.log(foo.msg);

