exports.done = false;
var a = require('./a.js');// 执行完后再执行后继
console.log('在 b.js 之中，a.done = %j', a.done);
exports.done = true;
console.log('b.js 执行完毕');