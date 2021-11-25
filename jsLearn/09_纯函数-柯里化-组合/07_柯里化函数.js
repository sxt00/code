function myCurrying(fn) {
    // fn 传入的函数 
    //  fn.length  需要传入的参数个数
    function curried(...args) {
        // args 实际传入的参数个数
        // 全部传入就 直接全部调用
        if ( args.length >= fn.length) {
            // 参数够了 就调用
            return fn(...args)
        }else {
            // 没有传入  就返回 一个函数
            return function ( ...args2) {
                // args 为返回函数的 参数
                //  将两次的参数 和在一起 判断 是否合适 
                return curried(...args,...args2)
            }
        }
    }
    return curried
}
function add1(x, y, z) {
    return x + y + z
}

var cuadd = myCurrying(add1)
console.log(cuadd(1)(2)(3));
var newc = cuadd(5,6)

console.log(newc(8),newc(1));