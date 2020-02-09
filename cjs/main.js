// main.js
var {foo:foo1,counter:counter1, bar: bar1} = require('./lib');
var mod = require('./lib');

// CommonJS 模块里的：基本类型都是值的拷贝, 引用类型是值的引用
console.log(mod.counter, counter1, mod.foo, foo1, mod.bar, bar1);  // 3 3 3 3 { baz: 0 } { baz: 0 }
mod.incCounter();
console.log(mod.counter, counter1, mod.foo, foo1, mod.bar, bar1); // 4 3 3 3 { baz: 1 } { baz: 1 }

/**
 * ES6 模块与 CommonJS 模块的差异
讨论 Node 加载 ES6 模块之前，必须了解 ES6 模块与 CommonJS 模块完全不同。

它们有两个重大差异。

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
 */