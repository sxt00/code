function foo() {
    console.log(this)
}

const  obj = {
    name:'obj'
}
foo.call(obj)
foo.apply(obj)


// call 和 apply 的区别
function sum(num1,num2,num3) {
    console.log(num1+num2+num3,this)
}

sum(10,20,30)
sum.apply(obj,[10,20,30])
sum.call(obj,10,20,30)