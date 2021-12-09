// //Arguments 对象 
// /**
//  * 函数内部对应参数值的实参列表 对象 内置局部变量
//  * 也可以叫做类数组对象
//  */

//  function * generator(arg){
//     for(var v of arg){
//         yield v;
//     }
// }

// //Uncaught TypeError: arg is not iterable  普通对象没办法使用生成器
// var obj = {
//     a:1,
//     b:2,
//     c:3
// }
// // var it = generator(obj);
// // it.next()

// function test(a,b,c){
//     /**
//      * callee 宿主函数 test
//      * Symbol.iterator 可迭代对象标志
//      * 类数组 - Array-like
//      * 必须要有 length 从0开始的属性下标  没有数组的内置方法（build-in methods/object 内置方法 - internal methods 内部方法 ）
//      * 
//      */
//     console.log(arguments)
//     var it = generator(arguments)
//     console.log(it.next())
//     // console.log(arguments.toString()) //[object Arguments] 可以输出这种类型
//     // console.log(Array.isArray(arguments)) //false
//     // console.log(arguments.callee);

// }

// test(1,2,3)

// -----------------------分割-----


// //非箭头函数的其他函数的内置局部变量
// var test = (...args) =>{
//     // es6在弱化arguments的存在ƒ
//     // console.log(arguments)//Uncaught ReferenceError: arguments is not defined
//     console.log(args)//剩余参数
//     console.log(Array.isArray(args))//true

// }
// test(1,2,3)


//-------------分割---
/** https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments 
 * slice本身用在arguments身上会阻止JS引擎做一些特点的优化
 * 详情可看上方github链接
 * 不要传入或者泄漏出去arguments
 */
// function test() {
//     var argArr = [].slice.call(arguments);
//     console.log(argArr)
// }
// test(1, 2, 3)

//------------分割----

/**
 * 形实参对应关系- 共享关系
 * 默认情况下是要共享关系的
 */

// function test(a) {
//     arguments[0] = 10;
//     console.log(a, arguments[0])
//     a = 100;
//     console.log(a, arguments[0])

// }

// function test1(a = 100) {
//     // arguments[0] = 100;
//     // //行参中但凡有一个参数默认值 arguments都不会对应跟踪参数的最终值
//     // //
//     // console.log(a, arguments[0]); // 1, 100

//     //a在内部改变了输出1000，arguments跟随实参输出
//      a = 1000;
//      console.log(a,arguments[0]) // 1000 1

// }

// test1(1)

//有一个默认值都不会跟踪了 
// function test3(a, b, c = 10) {
//     arguments[0] = 100;
//     arguments[1] = 200;
//     arguments[2] = 300;
//     console.log(a, arguments[0])
//     console.log(b, arguments[1])
//     console.log(c, arguments[2])
//     /**
//      * 1 100
//      * 2 200
//      * 3 300
//      */
// }ß
// test3(1, 2, 3)

// //如果没有行参的话也无法跟踪 ，传入对象也不跟踪了 || 'use strict'就不会对应了同时也去掉了arguments.callee了
// function test3(...arg) {
//     arguments[0] = 100;
//     arguments[1] = 200;
//     arguments[2] = 300;
//     console.log(arg[0], arguments[0])
//     console.log(arg[1], arguments[1])
//     console.log(arg[2], arguments[2])
//     /**
//      * 1 100
//      * 2 200
//      * 3 300
//      */
// }
// test3(1, 2, 3)
































