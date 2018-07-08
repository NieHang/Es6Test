import greeter from './Greeter.js';
document.querySelector('#root').appendChild(greeter());

import { a, b, c } from './module1.js';

console.log(a, b, c);

// 动态加载模块(在这不能动态加载，没有解决)
// import('./module1.js').then(res=>{
//     console.log(res.a, res.b, res.c);
// });