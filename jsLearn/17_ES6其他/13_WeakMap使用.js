const obj = {name:'yoke'}


const weakmap = new WeakMap()
weakmap.set(obj,'aaa')


console.log(weakmap.get(obj));

console.log(weakmap.has(obj));

console.log(weakmap.delete(obj));

console.log(weakmap);