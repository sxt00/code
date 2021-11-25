
var obj ={message:'123'}


// with 语句形成自己的作用域 不常使用
function foo() {
    function bar () {
        with(obj) {
            console.log(message);
        }
    }
bar()
}

foo()
