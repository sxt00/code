function Person (){

}

console.log(Person.prototype);
console.log(Person.prototype.__proto__  === Person.__proto__.__proto__);
console.log();

console.log(Person instanceof Object);
console.log(Person.prototype instanceof Object);