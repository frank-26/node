// main.js
import { counter, incCounter} from './lib.mjs';
console.log(counter); // 3

incCounter();
console.log(counter); // 4
/**
 * ES6 模块输入的变量counter是活的，完全反应其所在模块lib.js内部的变化。
 * ES6 模块不会缓存运行结果，而是动态地去被加载的模块取值，并且变量总是绑定其所在的模块。
 * 由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。
 */



// main.js
import './x.mjs';
import './y.mjs';