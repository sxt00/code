const names = ['a','b','v']
const name = 'oooo'
const info = {
    name:'why',
    age:78
}

function foo( x,y,z) {
    console.log(x,y,z);
}
foo(...names)
foo(...name)
const newname =  [...names,name]
console.log(newname);

console.log({...info,address:'nn',name});


// 在数组中通过展开语法 进行的是 浅拷贝