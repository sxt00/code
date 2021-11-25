function foo1() {
  var bar = () => {
    console.log(arguments)
  }
  return bar
}

var fn = foo1(123)
fn()

const foo = (num1, num2, ...args) => {
    console.log(args)
    console.log(arguments)
}

foo(10, 20, 30, 40, 50)