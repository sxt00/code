Function.prototype.myapply = function(thisArg,args) {

    const Fn =this


    thisArg = (thisArg !== null && thisArg !== undefined) 
    ? Object(thisArg)
    : window


    thisArg.fn = Fn
    const r = thisArg.fn(...args)
    //  thisArg 添加了 fn方法 会一直存在地址指向 需要删去
    delete thisArg.fn


    return r
}

function foo() {
    console.log(this)
}

const  obj = {
    name:'obj'
}
// foo.myapply(obj)

function sum(num1,num2,num3) {
    console.log(num1+num2+num3,this)
}

sum.myapply(obj,[10,20,30])
console.log(obj)
