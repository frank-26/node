// m2.js
import {foo,obj} from './m1.mjs';
obj.a=100
console.log(foo,obj);
setTimeout(() => console.log(foo), 500);