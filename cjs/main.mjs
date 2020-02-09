import { counter, incCounter } from './lib.mjs';
console.log(counter); // 3
incCounter();
console.log(counter); // 4
/**
 * ES6 模块是动态引用，并且不会缓存值，[模块里面的变量绑定其所在的模块]。
 * export通过接口，输出的是同一个值。不同的脚本加载这个接口，得到的都是同样的实例
*/