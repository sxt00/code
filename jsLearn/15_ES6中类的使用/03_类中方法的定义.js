var names = ["abc", "cba", "nba"]
class Person {

    constructor (name,age) {
        this.name = name
        this.age = age
        this._address = '广东'
    }

    eating() {
        console.log(this.name + 'eating');
    }

    get address() {
        console.log('拦截访问操作');
        return this._address
    }
    set address(newAddress) {
        console.log('拦截设置操作');
        this._address = newAddress
    }

    // 类的静态方法
    static randomPerson() {
        var nameIndex = Math.floor(Math.random()* names.length)
        var name = names[nameIndex]
        var age = Math.floor(Math.random() * 100)
        return new Person(name, age)
    }
 }

 var p = new Person('why',18)
 console.log(p.address);
console.log( Person.randomPerson());