function Person () {}


var p =new Person() 

console.log(p instanceof Person);
console.log(Person.prototype.isPrototypeOf(p));


var obj = {
    name :'why',
    age:20
}

var info = Object.create(obj)

console.log(obj.isPrototypeOf(info));