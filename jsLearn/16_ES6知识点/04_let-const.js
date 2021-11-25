// 通过let/const定义的变量名是不可以重复定义  (在当前作用域)
const a = '1'
 
function foo() {
    const a = 4
    console.log(a);
}

foo()