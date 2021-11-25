
//
function Person(name,age,friends) {
    
    //  this  指向 调用的 实例对象
    this.name = name
    this.friends = friends
    this.age = age
}

Person.prototype.eating = function () {
    console.log(this.name + 'eating');
}

function Student(name,age,friends,sno) {
    Person.call(this,name,age,friends)
    this.sno = sno
}


Student.prototype = Person.prototype

Student.prototype.studying = function () {
    console.log(this.name + 'study');
}

var stu = new Student('s',18,['nihao'],001)



console.log(stu)
stu.eating()
var stu1 = new Student('s',18,['nihao'],001)
var stu2 = new Student('xt',19,['lilil'],002)

stu1.name = "kobe"
console.log(stu2.name)


stu1.friends.push("kobe")

console.log(stu1.friends)
console.log(stu2.friends)
