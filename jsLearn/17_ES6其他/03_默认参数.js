// 
function foo(m= 'a',n='b') {
    console.log(m,n);
}

foo(0,'')

// 
function printInfo({name,age} = {name:'why',age:'18'}) {
    console.log(name,age);
}
printInfo()
printInfo({name:'iii',age:26})
// 另外一种写法
function printInfo1({name = "why", age = 18} = {}) {
    console.log(name, age)
}
printInfo1()
printInfo1({name:'iii',age:'26'})

// 默认参数不作为参数长度计算
console.log(printInfo.length);