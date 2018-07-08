console.log('1模块加载了');

let   a = 1;
const b = 2;
const c = 3;

// 模块也可自动修改
setTimeout(() => {
    a = 10000;
}, 2000);

// export default 出来的东西，不需要花括号
export default 'module';

// 只要是export出来的东西，外面接收，都需要用花括号
export {
    a,
    b,
    c
}