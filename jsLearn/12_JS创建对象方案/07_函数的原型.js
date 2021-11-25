function foo () {
    
}

// 函数也是一个对象  类似于  new function 的操作
console.log(foo.__proto__);
console.log(foo.prototype);

