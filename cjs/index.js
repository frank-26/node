var b = require('./b.js');
var a = require('./a.js');// 执行顺序与加载顺序有关
console.log('在 index.js 之中, a.done=%j, b.done=%j', a.done, b.done);
/**
CommonJS的做法是，一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。
在 b.js 之中，a.done = false
b.js 执行完毕
在 a.js 之中，b.done = true
a.js 执行完毕
在 index.js 之中, a.done=true, b.done=true
 */

 /**
  * 上面的代码证明了两件事。
  * 一是，在b.js之中，a.js没有执行完毕，只执行了第一行。
  * 二是，index.js执行到第二行时，不会再次执行b.js，而是输出缓存的b.js的执行结果，即它的第四行(exports.done = true;)。
  */