/**
 *   arguments 是一个类数组 
 *   可以通过索引来调用
 *   有长度
 * 
 */


function foo() {

    // 将数组的方法  slice 方法拿来绑定到arguments
    const newArgu1 = Array.prototype.slice.call(arguments)
    console.log(newArgu1)
    

    const newArgu2 = [].slice.call(arguments)
    console.log(newArgu2)
    


    // ES6 新增的方法 
    const newArgu3 = Array.from(arguments)
    console.log(newArgu3)
    

    console.log([...arguments])
}

foo(2,3,4,5,6)