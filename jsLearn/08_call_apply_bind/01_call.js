

Function.prototype.mycall = function(thisArg,...arg) {

    const Fn = this
    // this 指向调用这个方法的函数

    // 绑定必须为对象 如果为 null || undefined 的话 还是指向 window
    thisArg = (thisArg !== null && thisArg !== undefined) ?
    Object(thisArg) : window

    // 调用执行的参数
    // 隐式绑定 让需要绑定的 this 来执行
    thisArg.fn = Fn 
    const result =  thisArg.fn(...arg)
    delete thisArg.fn



    return result


}

function foo() {
    console.log(this)
}

const  obj = {
    name:'obj'
}
foo.mycall(obj)

function sum(num1,num2,num3) {
    console.log(num1+num2+num3,this)
}

sum.mycall(obj,10,20,30)
