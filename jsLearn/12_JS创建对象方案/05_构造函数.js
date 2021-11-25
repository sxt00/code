function foo() {
    function bar () {
        
    }
    return bar
}

var fn1 = new foo () //  完全的开辟两个新的 对象出来 
//  期望为 共同的 方法 只存储一次
var fn2 = new foo()  //  
console.log(fn1 == fn2);