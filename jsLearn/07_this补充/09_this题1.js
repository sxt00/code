
var person = {
    name:'liu',
    sayName: function () {
        console.log(this.name);
    }
}

function sayName() {
    var s = person.sayName;
    s()  
    person.sayName();
    (person.sayName)();(b=person.sayName)()
}

sayName()










// l
// l
// 
// 