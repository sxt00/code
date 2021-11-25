// 顶层原型 是 Object 的原型 null
var obj = {}
console.log(obj);

console.log(obj.__proto__.__proto__);

console.log(Object.prototype)
console.log(Object.prototype.constructor)
console.log(Object.prototype.__proto__)

console.log(Object.getOwnPropertyDescriptors(Object.prototype))