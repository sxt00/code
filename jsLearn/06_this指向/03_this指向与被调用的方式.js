function foo() {
  console.log(this)
}


foo()
var obj = {
  name:'kobe',
  foo:foo
}

obj.foo();

foo.apply('123')
