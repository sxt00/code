// 我们每个对象中都有一个 [[prototype]], 这个属性可以称之为对象的原型(隐式原型)
var obj = {name:'tom'}

console.log(obj.__proto__ === Object.prototype);

console.log(Object.getPrototypeOf(obj));

// 2.原型有什么用呢?
// 当我们从一个对象中获取某一个属性时, 它会触发 [[get]] 操作
// 1. 在当前对象中去查找对应的属性, 如果找到就直接使用
// 2. 如果没有找到, 那么会沿着它的原型去查找 [[prototype]]
// obj.age = 18

console.log(obj.age);
Object.prototype.age = 185
console.log(obj.age);