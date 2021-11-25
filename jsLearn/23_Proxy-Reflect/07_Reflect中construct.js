function Student(name,age) {
    this.name = name
    this.age = age
}

function Dog() {

} 

const dog = Reflect.construct(Student,['tom',6],Dog)
// dog = new Student  and  construct is Dog

console.log(dog);
console.log(dog.__proto__ === Dog.prototypew);