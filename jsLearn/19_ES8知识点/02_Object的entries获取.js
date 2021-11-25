const obj = {
    name:'why',
    age: 20
}

console.log(Object.entries(obj));
Object.entries(obj).forEach( item => {
    console.log(item);
})

console.log(Object.entries(['a','b','c','d']));

console.log(Object.entries('abdcd'));