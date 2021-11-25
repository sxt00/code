// Symbol 的使用 创建唯一的标识

const s1 = Symbol()
const s2 = Symbol()

console.log(s1,s2,s1 === s2);

const s3 = Symbol('333')
console.log(s3,s3.description);


// 定义对象
const obj = {
    [s1]:'a',
    [s2]:'b'
}
// 新增属性
obj[s3] = 'c'

const s4 =  Symbol()
Object.defineProperty(obj,s4,{
    enumerable:true,
    configurable:true,
    writable:true,
    value:'4444'
})
console.log(obj);
console.log(obj[s4]);
// 不能通过 .  获取symbol 属性

// 4.使用Symbol作为key的属性名,在遍历/Object.keys等中是获取不到这些Symbol值
// 需要Object.getOwnPropertySymbols来获取所有Symbol的key
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))

// 5.Symbol.for(key)/Symbol.keyFor(symbol)
const sa = Symbol.for("aaa")
const sb = Symbol.for("aaa")
console.log(sa === sb)

const key = Symbol.keyFor(sa)
console.log(key)
const sc = Symbol.for(key)
console.log(sa === sc && sc===sb)