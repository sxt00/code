const obj = {
    name:'yoke',
    age:20,
    height:188
}

const {name:hame} = obj
console.log(hame)

function foo({name,age}) {
    console.log(name,age);
}

foo(obj)