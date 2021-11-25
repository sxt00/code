function foo() {
    console.log(this)   
}
const obj = {
    name:'obj',
    foo:foo
}

const obj2Foo = obj.foo.bind('obj2');
obj.foo() // obj
obj2Foo() // 'obj2'
var newFoo = foo.bind('aaa')

newFoo()


var bar = foo
console.log(bar === foo)
console.log(newFoo === foo)