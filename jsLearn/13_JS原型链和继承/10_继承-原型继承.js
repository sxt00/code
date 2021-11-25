var obj = {
    name:'why',
    age:20
}

var info = Object.create(obj)

// create 函数实现

function createObj1(o) {
    var newObj = {}
    Object.setPrototypeOf(newObj,o)
    return newObj
}

function createObj2(o) {
    function Fn() {}
    Fn.prototype = o
    var newObj = new Fn()
    return newObj
}
var info1 =  createObj1(obj)
var info2 = createObj2(obj)

console.log(info);
console.log(info.__proto__);
console.log(info1);
console.log(info1.__proto__);
console.log(info2);
console.log(info2.__proto__);