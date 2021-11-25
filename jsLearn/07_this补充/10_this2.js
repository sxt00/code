
const person1 = {
    name:'s',
    foo1 : function () {
        console.log(this.name);
    },
    foo2 : () => console.log(this.name),
    foo3 : function () {
        return function () {
            console.log(this.name);
        }
    },
    foo4: function () {
        console.log(this);
        return () => {
            console.log(this.name);
        }
    }
}
const person2 = { name:'liu'}

person1.foo4()()

person1.foo4.call(person2)();

person1.foo4().call(person2)
