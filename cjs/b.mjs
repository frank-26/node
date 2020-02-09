import {foo, test} from './a.mjs';
console.log('b.mjs');
console.log(test); // [Function: test] , 由于函数声明存在提升
console.log(foo);
export let bar = 'bar';

/**
 * a.mjs
file:///Users/yanli/Documents/zme/node/cjs/a.mjs:3
console.log(bar);
            ^
ReferenceError: Cannot access 'bar' before initialization
 * 
 * 
*/