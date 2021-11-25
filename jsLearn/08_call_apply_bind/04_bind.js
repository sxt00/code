Function.prototype.mybind = function (thisArg, ...argsArray) {

    // 1. 获取调用的函数
    const Fn = this

    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    return function (...args) {
        thisArg.fn = Fn
        return thisArg.fn(...argsArray, ...args)
    }

}

function foo() {
    console.log("foo被执行", this)
    return 20
}
function sum(num1, num2, num3, num4) {
    console.log(num1, num2, num3, num4)
}

// 系统的bind使用
var bar = foo.mybind("abc")
bar()
var newSum = sum.mybind("abc", 10, 20)
var result = newSum(30, 40)
