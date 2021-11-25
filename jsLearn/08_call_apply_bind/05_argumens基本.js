function foo (num1,num2,num3,num4) {

 // 类数组对象中(长的像是一个数组, 本质上是一个对象): arguments
    console.log(arguments)


    console.log(arguments.length)


    console.log(arguments[2])
    
    // callee  获取当前 arguments 所在的函数
    console.log(arguments.callee)
}

foo(10, 20, 30, 40, 50)