function foo () {}

// 1 constructor 属性

// foo.prototype  上有
console.log(foo.prototype);

// 2.我们也可以添加自己的属性
// foo.prototype.name = "why"
// foo.prototype.age = 18
// foo.prototype.height = 18
// foo.prototype.eating = function() {

// }
// 重复的 添加 比较麻烦 因此


// 直接修改 prototype 
foo.prototype = {
// constructor: foo,
  name: "why",
  age: 18,
  height: 1.88
}
// 此时要去更改 constructor 的指向

// 推荐方法
Object.defineProperty(foo.prototype,"constructor",{
    enumerable:false,
    configurable:true,
    writable:true,
    value: foo
})